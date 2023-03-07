import * as Preact from "preact"

import "views/Mount.view.less"

export default class Mount {
    render() {
        return (
            <div className="Mount">
                <MainScreen/>
            </div>
        )
    }
}

class MainScreen {
    render() {
        return (
            <div class="MainScreen">
                <Inputs/>
                <SkirmishSimulation/>
            </div>
        )
    }
}

class Inputs {
    render() {
        return (
            <button onClick={() => SimulateSkirmishOdds(campaign.skirmishes["test"])}>
                Simulate!!
            </button>
        )
    }
}

class SkirmishSimulation {
    render() {
        const skirmish = campaign.skirmishes["test"]
        return (
            <div class="Skirmish">
                {skirmish.squads.map((squad, index) => {
                    if(squad.simulation == undefined) return
                    return (
                        <div class="Squad">
                            <div>{squad.alignment}</div>
                            <div>{Math.round(skirmish.squads[(index + 1) % 2].simulation.odds * 100)}% victory</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

class Skirmish {
    render() {
        const skirmish = campaign.skirmishes["test"]
        return (
            <div class="Skirmish">
                {skirmish.squads.map((squad) => {
                    return (
                        <div class="Squad">
                            <div>{squad.alignment}</div>
                            <div>{squad.turns[0]?.hitAttacks} of {squad.turns[0]?.totalAttacks} hit attacks ({Math.round(squad.turns[0]?.hitAttacks / squad.turns[0]?.totalAttacks * 100) + "%"})</div>
                            <div>{squad.turns[0]?.damage} damage performed</div>
                            <div>{squad.turns[0]?.kills} killing blows</div>
                            <div>{squad.turns[0]?.aliveUnits} of {squad.turns[0]?.totalUnits} alive units ({Math.round(squad.turns[0]?.aliveUnits / squad.turns[0]?.totalUnits * 100) + "%"})</div>
                            <div>{squad.turns[0]?.health} health</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}

class Random {
    static sign() {
        return Math.random() < 0.5 ? -1 : +1
    }
    static range(a, b) {
        const min = Math.min(a, b)
        const max = Math.max(a, b)
        return min + (Math.random() * (max - min))
    }
    static element(array) {
        return array[Math.floor(Math.random() * array.length)]
    }
}

function CloneSkirmish(skirmish) {
    return {
        "squads": skirmish.squads.map((squad) => {
            return {
                "alignment": squad.alignment,
                "count": squad.count,
                "classkey": squad.classkey,
            }
        })
    }
}

function SimulateSkirmishOdds(protoskirmish) {
    const simulatedSkirmishes = []
    const NUMBER_OF_SIMULATIONS = 500
    for(let i = 0; i < NUMBER_OF_SIMULATIONS; i += 1) {
        simulatedSkirmishes.push(SimulateSkirmish(protoskirmish))
    }

    protoskirmish.squads[0].simulation = {"failedSkirmishes": 0, "totalSkirmishes": 0},
    protoskirmish.squads[1].simulation = {"failedSkirmishes": 0, "totalSkirmishes": 0},
    simulatedSkirmishes.forEach((simulatedSkirmish) => {
        protoskirmish.squads[0].simulation.totalSkirmishes += 1
        protoskirmish.squads[1].simulation.totalSkirmishes += 1
        if(simulatedSkirmish.squads[0].turns[0].hasBeenDefeated) {
            protoskirmish.squads[0].simulation.failedSkirmishes += 1
        }
        if(simulatedSkirmish.squads[1].turns[0].hasBeenDefeated) {
            protoskirmish.squads[1].simulation.failedSkirmishes += 1
        }
    })
    protoskirmish.squads[0].simulation.odds = (protoskirmish.squads[0].simulation.failedSkirmishes / protoskirmish.squads[0].simulation.totalSkirmishes)
    protoskirmish.squads[1].simulation.odds = (protoskirmish.squads[1].simulation.failedSkirmishes / protoskirmish.squads[1].simulation.totalSkirmishes)
}

function SimulateSkirmish(skirmish) {
    skirmish = CloneSkirmish(skirmish)
    const NUMBER_OF_SIMULATED_ROUNDS = 30
    for(let r = 0; r < NUMBER_OF_SIMULATED_ROUNDS; r += 1) {
        SimulateSkirmishRound(skirmish)
        if(skirmish.squads[0].turns[0].hasBeenDefeated
        || skirmish.squads[1].turns[0].hasBeenDefeated) {
            break
        }
    }
    return skirmish
}

function SimulateSkirmishRound(skirmish) {
    skirmish.round = skirmish.round || 0
    skirmish.round += 1

    skirmish.squads.forEach((squad) => {
        squad.turns = squad.turns || []
        if(squad.units == undefined) {
            squad.units = []
            for(let i = 0; i < squad.count; i += 1) {
                squad.units.push({
                    "class": classes[squad.classkey],
                    "health": classes[squad.classkey].health,
                    "maxhealth": classes[squad.classkey].health,
                })
            }
        }
    })

    skirmish.squads.forEach((squad) => {
        squad.turns.unshift({
            "damage": 0,
            "hitAttacks": 0,
            "missedAttacks": 0,
            "totalAttacks": 0,
            "criticalHits": 0,
            "kills": 0,
            "log": [],
            "aliveUnits": 0,
            "deadUnits": 0,
            "totalUnits": 0,
            "health": 0,
        })
    })

    if(skirmish.round > 1) {
        skirmish.squads.forEach((squad, index) => {
            squad.units.forEach((performerUnit) => {
                if(performerUnit.health <= 0) return
                for(let i = 0; i < performerUnit.class.attack.count; i += 1) {
                    const targetSquad = skirmish.squads[(index + 1) % 2]
                    const targetUnit = Random.element(targetSquad.units.filter((unit) => unit.health > 0))

                    if(targetUnit == undefined) {
                        return
                    }

                    let accuracyRoll = Random.range(1, 20)
                    if(performerUnit.class.attack.hasAdvantage) {
                        accuracyRoll = Math.max(accuracyRoll, Random.range(1, 20))
                    }
                    const accuracy = accuracyRoll + performerUnit.class.attack.accuracy
                    const isHit = (accuracy >= targetUnit.class.armor)
                    const isCriticalHit = (accuracyRoll == 20)

                    const damageRoll = performerUnit.class.attack.damage
                    let damage = damageRoll
                    if(isCriticalHit) {
                        damage += damageRoll
                    }
                    // damage += STATIC DAMAGE AMOUNT

                    if(isHit == true) {
                        targetUnit.health -= damage

                        squad.turns[0].hitAttacks += 1
                        squad.turns[0].totalAttacks += 1
                        squad.turns[0].damage += damage
                        if(targetUnit.health <= 0) {
                            squad.turns[0].kills += 1
                        }

                        if(isCriticalHit == true) {
                            squad.turns[0].criticalHits += 1
                        }
                    } else if(isHit == false) {
                        squad.turns[0].missedAttacks += 1
                        squad.turns[0].totalAttacks += 1
                    }

                    squad.turns[0].log.push({
                        performerUnit, targetUnit,
                        damageRoll, damage,
                        accuracyRoll, accuracy,
                        isHit, isCriticalHit,
                    })
                }
            })
        })
    }

    // Survey who is alive and who isn't at the end of it all.
    skirmish.squads.forEach((squad) => {
        squad.units.forEach((unit) => {
            squad.turns[0].totalUnits += 1
            if(unit.health <= 0) {
                squad.turns[0].deadUnits += 1
            } else {
                squad.turns[0].aliveUnits += 1
                squad.turns[0].health += unit.health
            }
        })

        if(squad.turns[0].aliveUnits == 0) {
            squad.turns[0].hasBeenDefeated = true
        }
    })
}


const classes = {
    "akroan-hoplite": {
        "health": 52, // 8d8+16
        "armor": 18,
        "speed": 30,
        "attack": {
            "count": 2,
            "accuracy": +5,
            "damage": 6,
        }
    },
    "setessan-hoplite": {
        "health": 58, // 9d8+18
        "armor": 16,
        "speed": 30,
        "attack": {
            "count": 2,
            "accuracy": +5,
            "damage": 6,
            "hasAdvantage": true,
        }
    },
}

const campaign = {
    "skirmishes": {
        "test": {
            "squads": [
                {
                    "alignment": "iroas",
                    "count": 115,
                    "classkey": "akroan-hoplite",
                },
                {
                    "alignment": "nylea",
                    "count": 100,
                    "classkey": "setessan-hoplite" // "setessan-hoplite",
                },
            ]
        }
    }
}
window.campaign = campaign
