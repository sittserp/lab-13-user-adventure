// quests[0].choices[0].description; ==> 'negotiate with them'

export default [
    {
        id: 'snake',
        title: 'Snake Bight!',
        map: {
            top: '89%',
            left: '44%'
        },
        image: 'snake.jpg',
        description: `
        You run across a snake, but you don't realize it until it has already bitten you! What do you do?
    `,
        choices: [{
            id: 'tourniquet',
            description: 'Tie off your wound and call for help',
            result: `
            Good choice!  Your tourniquet slowed the venom while a friend brought medicine. 
        `,
            hp: -10,
            supplies: -5
        }, {
            id: 'run',
            description: 'Just run!',
            result: `
            Oooooo, the venom spread faster, and it's curtains for you.
        `,
            hp: -100,
            supplies: 0
        }, {
            id: 'exterminate',
            description: 'Look for other snakes to exterminate.',
            result: `
            You can't get 'em all, especially when the first one got you.  Game OVER.
        `,
            hp: -100,
            supplies: 0
        }]
    },
    {
        id: 'hunger',
        title: 'Hunger',
        map: {
            top: '17%',
            left: '37%'
        },
        image: 'scarce.jpg',
        audio: 'dragon.wav',
        action: 'dragon-growl.aiff',
        description: `
        You're low on food, and your party is getting hangry. What do you do?
    `,
        choices: [{
            id: 'hunt',
            description: 'Go hunting.',
            result: `
            You got a big one! You and your party use the whole buffalo. 
        `,
            hp: 5,
            supplies: -5
        }, {
            id: 'fish',
            description: 'Go fishing.',
            result: `
            You get bored and find out pine cones don't taste good. PowerBait hasn't been invented yet.
        `,
            hp: -5,
            supplies: -5
        }, {
            id: 'vegan',
            description: 'Adopt a vegan lifestyle.',
            result: `
            Healthy choice! Others in your party don't understand, but you feel good, and a grain + a legume = a complete protein!
        `,
            hp: 30,
            supplies: 0
        }]
    },
    {
        id: 'sunburn',
        title: 'Sunburn',
        map: {
            top: '31%',
            left: '5%'
        },
        prerequisites: ['snake', 'hunger'],
        image: 'sunburn.png',
        audio: 'sizzle.wav',
        action: 'chest-opening.wav',
        description: `
        You were out in the sun too long. What do you do?
    `,
        choices: [{
            id: 'hat',
            description: 'Wear a hat next time.',
            result: 'Good choice! Always be prepared.',
            hp: 5,
            supplies: -1
        }, {
            id: 'disregard',
            description: 'A little sun never hurt anyone.',
            result: `The sun doesn't care, tough guy. Soon you get heat exhaustion too, and you're worn out.`,
            hp: -10,
            supplies: 0
        }, {
            id: 'lazy',
            description: 'Stay in the covered wagon.',
            result: 'Your party gets mad at you for not contributing and leaves you on the wrong side of a river one night. No hat.',
            hp: -100,
            supplies: 0
        }]
    }
];
