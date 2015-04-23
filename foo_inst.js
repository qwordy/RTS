console.log('node-1');
function hello() {
    console.log('node4');
    hello();
    console.log('node5');
    if (0) {
        console.log('node7');
        a = 0;
    } else {
        console.log('node8');
        ;
    }
}
console.log('node9');
if (1) {
    console.log('node11');
    hello();
    console.log('node12');
    a = 1;
} else {
    console.log('node13');
    hello();
    console.log('node14');
    a = 2;
}
{
    "type": "Program",
    "body": [
        {
            "type": "ExpressionStatement",
            "expression": {
                "type": "CallExpression",
                "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                        "type": "Identifier",
                        "name": "console"
                    },
                    "property": {
                        "type": "Identifier",
                        "name": "log"
                    }
                },
                "arguments": [
                    {
                        "type": "Literal",
                        "value": "node-1",
                        "raw": "node-1"
                    }
                ]
            }
        },
        {
            "type": "FunctionDeclaration",
            "id": {
                "type": "Identifier",
                "name": "hello",
                "range": [
                    9,
                    14
                ]
            },
            "params": [],
            "defaults": [],
            "body": {
                "type": "BlockStatement",
                "body": [
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "CallExpression",
                            "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                    "type": "Identifier",
                                    "name": "console"
                                },
                                "property": {
                                    "type": "Identifier",
                                    "name": "log"
                                }
                            },
                            "arguments": [
                                {
                                    "type": "Literal",
                                    "value": "node4",
                                    "raw": "node4"
                                }
                            ]
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "CallExpression",
                            "callee": {
                                "type": "Identifier",
                                "name": "hello",
                                "range": [
                                    20,
                                    25
                                ]
                            },
                            "arguments": [],
                            "range": [
                                20,
                                27
                            ]
                        },
                        "range": [
                            20,
                            28
                        ]
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "CallExpression",
                            "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                    "type": "Identifier",
                                    "name": "console"
                                },
                                "property": {
                                    "type": "Identifier",
                                    "name": "log"
                                }
                            },
                            "arguments": [
                                {
                                    "type": "Literal",
                                    "value": "node5",
                                    "raw": "node5"
                                }
                            ]
                        }
                    },
                    {
                        "type": "IfStatement",
                        "test": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0",
                            "range": [
                                34,
                                35
                            ]
                        },
                        "consequent": {
                            "type": "BlockStatement",
                            "body": [
                                {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                        "type": "CallExpression",
                                        "callee": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                                "type": "Identifier",
                                                "name": "console"
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "name": "log"
                                            }
                                        },
                                        "arguments": [
                                            {
                                                "type": "Literal",
                                                "value": "node7",
                                                "raw": "node7"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                        "type": "AssignmentExpression",
                                        "operator": "=",
                                        "left": {
                                            "type": "Identifier",
                                            "name": "a",
                                            "range": [
                                                37,
                                                38
                                            ]
                                        },
                                        "right": {
                                            "type": "Literal",
                                            "value": 0,
                                            "raw": "0",
                                            "range": [
                                                41,
                                                42
                                            ]
                                        },
                                        "range": [
                                            37,
                                            42
                                        ]
                                    },
                                    "range": [
                                        37,
                                        43
                                    ]
                                }
                            ]
                        },
                        "alternate": {
                            "type": "BlockStatement",
                            "body": [
                                {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                        "type": "CallExpression",
                                        "callee": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                                "type": "Identifier",
                                                "name": "console"
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "name": "log"
                                            }
                                        },
                                        "arguments": [
                                            {
                                                "type": "Literal",
                                                "value": "node8",
                                                "raw": "node8"
                                            }
                                        ]
                                    }
                                },
                                {
                                    "type": "EmptyStatement"
                                }
                            ]
                        },
                        "range": [
                            30,
                            43
                        ]
                    }
                ],
                "range": [
                    17,
                    45
                ]
            },
            "rest": null,
            "generator": false,
            "expression": false,
            "range": [
                0,
                45
            ]
        },
        {
            "type": "ExpressionStatement",
            "expression": {
                "type": "CallExpression",
                "callee": {
                    "type": "MemberExpression",
                    "computed": false,
                    "object": {
                        "type": "Identifier",
                        "name": "console"
                    },
                    "property": {
                        "type": "Identifier",
                        "name": "log"
                    }
                },
                "arguments": [
                    {
                        "type": "Literal",
                        "value": "node9",
                        "raw": "node9"
                    }
                ]
            }
        },
        {
            "type": "IfStatement",
            "test": {
                "type": "Literal",
                "value": 1,
                "raw": "1",
                "range": [
                    51,
                    52
                ]
            },
            "consequent": {
                "type": "BlockStatement",
                "body": [
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "CallExpression",
                            "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                    "type": "Identifier",
                                    "name": "console"
                                },
                                "property": {
                                    "type": "Identifier",
                                    "name": "log"
                                }
                            },
                            "arguments": [
                                {
                                    "type": "Literal",
                                    "value": "node11",
                                    "raw": "node11"
                                }
                            ]
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "CallExpression",
                            "callee": {
                                "type": "Identifier",
                                "name": "hello",
                                "range": [
                                    57,
                                    62
                                ]
                            },
                            "arguments": [],
                            "range": [
                                57,
                                64
                            ]
                        },
                        "range": [
                            57,
                            65
                        ]
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "CallExpression",
                            "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                    "type": "Identifier",
                                    "name": "console"
                                },
                                "property": {
                                    "type": "Identifier",
                                    "name": "log"
                                }
                            },
                            "arguments": [
                                {
                                    "type": "Literal",
                                    "value": "node12",
                                    "raw": "node12"
                                }
                            ]
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                                "type": "Identifier",
                                "name": "a",
                                "range": [
                                    67,
                                    68
                                ]
                            },
                            "right": {
                                "type": "Literal",
                                "value": 1,
                                "raw": "1",
                                "range": [
                                    71,
                                    72
                                ]
                            },
                            "range": [
                                67,
                                72
                            ]
                        },
                        "range": [
                            67,
                            73
                        ]
                    }
                ],
                "range": [
                    54,
                    75
                ]
            },
            "alternate": {
                "type": "BlockStatement",
                "body": [
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "CallExpression",
                            "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                    "type": "Identifier",
                                    "name": "console"
                                },
                                "property": {
                                    "type": "Identifier",
                                    "name": "log"
                                }
                            },
                            "arguments": [
                                {
                                    "type": "Literal",
                                    "value": "node13",
                                    "raw": "node13"
                                }
                            ]
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "CallExpression",
                            "callee": {
                                "type": "Identifier",
                                "name": "hello",
                                "range": [
                                    84,
                                    89
                                ]
                            },
                            "arguments": [],
                            "range": [
                                84,
                                91
                            ]
                        },
                        "range": [
                            84,
                            92
                        ]
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "CallExpression",
                            "callee": {
                                "type": "MemberExpression",
                                "computed": false,
                                "object": {
                                    "type": "Identifier",
                                    "name": "console"
                                },
                                "property": {
                                    "type": "Identifier",
                                    "name": "log"
                                }
                            },
                            "arguments": [
                                {
                                    "type": "Literal",
                                    "value": "node14",
                                    "raw": "node14"
                                }
                            ]
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                                "type": "Identifier",
                                "name": "a",
                                "range": [
                                    94,
                                    95
                                ]
                            },
                            "right": {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2",
                                "range": [
                                    98,
                                    99
                                ]
                            },
                            "range": [
                                94,
                                99
                            ]
                        },
                        "range": [
                            94,
                            100
                        ]
                    }
                ],
                "range": [
                    81,
                    102
                ]
            },
            "range": [
                47,
                102
            ]
        }
    ],
    "range": [
        0,
        102
    ]
}