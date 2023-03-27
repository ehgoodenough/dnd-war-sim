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
            <button onClick={this.onClick}>
                Go
            </button>
        )
    }
    onClick() {
        window.skirmish.simulation = SimulateSkirmishOdds(window.skirmish.state)
        // SimulateSkirmishRound(window.skirmish.state)
    }
}

class SkirmishSimulation {
    render() {
        if(window.skirmish.simulation == undefined) return
        return (
            <div class="SkirmishSimulation">
                {window.skirmish.simulation.squads.map((squad, index) => {
                    return (
                        <div class="Squad">
                            <div>{window.skirmish.state.squads[index].alignment}</div>
                            <div>{Math.round(window.skirmish.simulation.squads[index].winrate * 100)}% victory</div>
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
    const NUMBER_OF_SIMULATIONS = 50
    for(let i = 0; i < NUMBER_OF_SIMULATIONS; i += 1) {
        simulatedSkirmishes.push(SimulateSkirmish(protoskirmish))
    }

    const simulation = {
        "totalSkirmishes": 0,
        "squads": [
            {"failedSkirmishes": 0},
            {"failedSkirmishes": 0},
        ],
    }
    simulatedSkirmishes.forEach((simulatedSkirmish) => {
        simulation.totalSkirmishes += 1
        if(simulatedSkirmish.squads[0].survey.hasBeenDefeated) {
            simulation.squads[0].failedSkirmishes += 1
        }
        if(simulatedSkirmish.squads[1].survey.hasBeenDefeated) {
            simulation.squads[1].failedSkirmishes += 1
        }
    })
    simulation.squads[0].winrate = 1 - (simulation.squads[0].failedSkirmishes / simulation.totalSkirmishes)
    simulation.squads[1].winrate = 1 - (simulation.squads[1].failedSkirmishes / simulation.totalSkirmishes)

    return simulation
}

function SimulateSkirmish(skirmish) {
    skirmish = CloneSkirmish(skirmish)
    const NUMBER_OF_SIMULATED_ROUNDS = 30
    for(let r = 0; r < NUMBER_OF_SIMULATED_ROUNDS; r += 1) {
        SimulateSkirmishRound(skirmish)
        if(skirmish.squads[0].survey.hasBeenDefeated
        || skirmish.squads[1].survey.hasBeenDefeated) {
            break
        }
    }
    return skirmish
}

function SimulateSkirmishRound(skirmish) {
    skirmish.round = skirmish.round || 0
    skirmish.round += 1

    skirmish.squads.forEach((squad) => {
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
                    const isCriticalHit = (accuracyRoll == 20)
                    const isHit = (accuracy >= targetUnit.class.armor) || isCriticalHit

                    const damageRoll = performerUnit.class.attack.damage
                    let damage = damageRoll
                    if(isCriticalHit) {
                        damage += damageRoll
                    }

                    if(isHit == true) {
                        targetUnit.health -= damage
                    }
                }
            })
        })
    }

    // Survey who is alive and who isn't at the end of it all.
    skirmish.squads.forEach((squad) => {
        squad.survey = {
            "totalUnits": 0,
            "aliveUnits": 0,
            "deadUnits": 0,
            "totalHealth": 0,
        }
        squad.units.forEach((unit) => {
            squad.survey.totalUnits += 1
            if(unit.health <= 0) {
                squad.survey.deadUnits += 1
            } else {
                squad.survey.aliveUnits += 1
                squad.survey.totalHealth += unit.health
            }
        })

        if(squad.survey.aliveUnits == 0) {
            squad.survey.hasBeenDefeated = true
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

window.skirmish = {
    "state": {
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
