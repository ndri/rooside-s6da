// Configuration file, change the contents to your needs. The contents of this
// file are in the public domain.

// The number of rounds can be changed:
//  * add/remove questions in questions_rounds
//  * add/remove rows in answers_rounds
//  * add/remove entries in multiplicator

// The number of answers per question can be changed:
//  * add/remove entries in the correct row of answers_rounds

// The number of questions in the finals can be changed:
//  * add/remove rows in questions_finals
//  * add/remove rows in answers_finals

// The number of valid answers in the finals can be changed:
//  * add/remove entries in the correct row of answers_finals

var game = 6;


var all_questions = [
    [
        "Nimeta ühikahoone Tartus",
        "Nimeta programmeerimiskeel",
        "Nimeta planeet"
    ],
    [
        'Nimeta Tartu kohvik',
        'Nimeta Tartu linnaosa',
        'Nimeta elund'
    ],
    [
        'Nimeta foobia',
        'Nimeta korp!',
        'Kuhu lähed esimesel deidil?'
    ],
    [
        'Kõige raskem aine',
        'Nimeta meeste soeng',
        'Nimeta Eesti räppar'
    ],
    [
        'Nimeta kook',
        'Kirjelda üliõpilast ühe sõnaga',
        'Nimeta tööots, millega kooli kõrvalt teenida'
    ],
    [
        'Nimeta vabaaine, mis ei ole mat-inf teaduskonnas',
        'Kõige parem õppejõud',
        'Lemmik veebileht'
    ],
    [
        'Nimeta Eesti seksikaim mees',
        'Mis koolis käisid enne ülikooli?',
        'Kui ma ei oleks mat-inf, siis ma oleks...'
    ]
];
// questions for rounds
var questions_rounds = all_questions[game];


var all_answers = [
    [
        [
            ["Narva mnt 89 e Mordor", 28],
            ["Tiigi 14", 21],
            ["Raatuse 22", 19],
            ["Narva mnt 27", 12],
            ["Pepleri 14", 11],
            ["Narva mnt 25", 6]
        ],
        [
            ["Java", 51],
            ["Python", 26],
            ["C++", 12],
            ["C#", 4],
            ["HTML", 3],
            ["R", 3]
        ],
        [
            ["Maa", 39],
            ["Marss", 21],
            ["Pluuto", 17],
            ["Jupiter", 12],
            ["Uraan", 6],
            ["Saturn,", 4]
        ]
    ],
    [
        [
            ["Werner", 45],
            ["Säde", 15],
            ["Krempel", 12],
            ["Gustav", 5],
            ["Mandel", 3],
            ["Suudlevad tudengid", 3]
        ],
        [
            ["Annelinn", 39],
            ["Karlova", 28],
            ["Supilinn", 10],
            ["Ülejõe", 6],
            ["Ihaste", 5],
            ["Kesklinn", 5]
        ],
        [
            ["Süda", 49],
            ["Maks", 22],
            ["Nahk", 8],
            ["Neerud", 6],
            ["Magu", 5],
            ["Aju", 4],
        ]
    ],
    [
        [
            ['Klaustrofoobia', 26],
            ['Araknofoobia', 24],
            ['Kõrgus', 19],
            ['Homofoobia', 4],
            ['Agorafoobia', 3],
            ['Pimedus', 3]
        ],
            [
            ['Sakala', 48],
            ['Ugala', 17],
            ['Rotalia', 6],
            ['EÜS', 5],
            ['Revelia', 5]
        ],
        [
            ['Sööma', 25],
            ['Kohvikusse', 24],
            ['Kinno', 15],
            ['Jalutama', 9],
            ['Baari', 9],
            ['Ööklubisse', 4]
        ]
    ],
    [
        [
            ['Matemaatiline analüüs III', 15],
            ['Diskreetne matemaatika I', 14],
            ['Programmeerimisharjutused', 13],
            ['Algebra I', 12],
            ['Matemaatiline maailmapilt', 10],
            ['Kõrgem matemaatika I', 9]
        ],
        [
            ['Mullet', 18],
            ['Kiilakas', 17],
            ['Potisoeng', 13],
            ['Siil', 11],
            ['Man bun', 8],
            ['Mohawk', 7]
        ],
        [
            ['Nublu', 44],
            ['Genka', 14],
            ['Reket', 10],
            ['Arop', 9]
        ],
    ],
    [
        [
            ['Napoleoni', 34],
            ['Brita', 8],
            ['Juustukook', 7],
            ['Pannkook', 6],
            ['Pavlola', 5],
            ['Brownie', 5]
        ],
        [
            ['Laisk', 18],
            ['Väsinud / magamata', 17],
            ['Tark / nutikas / leidlik', 8],
            ['Joodik / purjus', 6],
            ['Stressis / koormatud', 5]
        ],
        [
            ['Klienditeenindaja', 35],
            ['Prostitutsioon / strippamine', 12],
            ['Transport', 10],
            ['Arendamine', 9],
            ['Õpetamine', 5],
        ]
    ],
    [
        [
            ['Eestimaa tundmine', 22],
            ['Tervislik liikumisharrastus', 14],
            ['Hispaania keel', 6],
            ['Vene keel', 6],
            ['Saksa keel', 5],
            ['Jaapani keel', 4]
        ],
        [
            ['Eno Tõnisson', 26],
            ['Indrek Zolk', 9],
            ['Ahti Peder', 8],
            ['Kaido Lätt', 7],
            ['Kati Ain', 5]
        ],
        [
            ['YouTube', 15],
            ['reddit', 14],
            ['Moodle', 10],
            ['Google', 9],
            ['ÕIS1', 9],
            ['ÕIS2', 7]
        ]
    ],
    [
        [
            ['Erki Nool', 15],
            ['Uku Suviste', 11],
            ['Eno Tõnisson', 6],
            ['Rasmus Mägi', 6],
            ['Kaido Lätt', 5],
            ['Marco Tasane', 5]
        ],
        [
            ['Hugo Treffneri Gümnaasium', 16],
            ['Miina Härma Gümnaasium', 9],
            ['Tallinna Reaalkool', 7],
            ['Gustav Adolfi Gümnaasium', 6],
            ['Nõo Reaalgümnaasium', 6],
            ['Jaan Poska Gümnaasium', 5],
        ],
        [
            ['kodutu / töötu / ei keegi', 13],
            ['arst', 12],
            ['majandus', 10],
            ['FKM', 7],
            ['bioloog', 4],
            ['kokk', 3],
        ]
    ]
];
// answers to the questions for rounds
// format: dimension 1 = round, dimension 2 = question, dimension 3 = [answer, points]
var answers_rounds = all_answers[game];


// multiplicator for the points gained in a round
// format: indexed by round, value is multiplicator
var multiplicator = [1, 1, 2, 3];


// questions for finals
var questions_finals = [
    "Name a place where it's hot",
    "Name a well known sight in New York",
    "Name something that can be found in a pond",
    "Name something that can be shattered"
];


// answers to the questions for the finals  
// format: dimension 1 = question, dimension 2 = answer, dimension 3 = [answer, points]
// must have five questions
var answers_finals = [
    [
        ["Sahara", 35],
        ["Hawaii", 26],
        ["Bahamas", 10],
        ["Oven", 10],
        ["Sauna", 9]
    ], [
        ["Statue of Liberty", 30],
        ["Empire State Building", 31],
        ["Central Park", 26],
        ["Brooklyn Bridge", 9],
        ["Chinatown", 3]
    ], [
        ["Water Lily", 37],
        ["Carp", 24],
        ["Water pump", 19],
        ["Fountain", 12],
        ["Stones", 8],
    ], [
        ["Vase", 29],
        ["Glass", 28],
        ["Economy", 16],
        ["Building", 15],
        ["Myth", 12],
    ]
];


// timer duration for first and second player in finals, given in seconds
var timers = [20, 25];

