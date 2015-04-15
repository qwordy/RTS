function hello() {
    console.log('node4'), hello();
    if (0) {
        console.log('node7'), a = 0;
    } else ;
}
if (1) {
    console.log('node11'), hello();
    console.log('node12'), a = 1;
} else {
    console.log('node13'), hello();
    console.log('node14'), a = 2;
}
{
    "type": "Program",
    "body": [
        {
            "type": "FunctionDeclaration",
            "id": {
                "type": "Identifier",
                "name": "hello"
            },
            "params": [],
            "defaults": [],
            "body": {
                "type": "BlockStatement",
                "body": [
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "SequenceExpression",
                            "expressions": [
                                {
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
                                },
                                {
                                    "type": "CallExpression",
                                    "callee": {
                                        "type": "Identifier",
                                        "name": "hello"
                                    },
                                    "arguments": []
                                }
                            ]
                        }
                    },
                    {
                        "type": "IfStatement",
                        "test": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                        },
                        "consequent": {
                            "type": "BlockStatement",
                            "body": [
                                {
                                    "type": "ExpressionStatement",
                                    "expression": {
                                        "type": "SequenceExpression",
                                        "expressions": [
                                            {
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
                                            },
                                            {
                                                "type": "AssignmentExpression",
                                                "operator": "=",
                                                "left": {
                                                    "type": "Identifier",
                                                    "name": "a"
                                                },
                                                "right": {
                                                    "type": "Literal",
                                                    "value": 0,
                                                    "raw": "0"
                                                }
                                            }
                                        ]
                                    }
                                }
                            ]
                        },
                        "alternate": {
                            "type": "EmptyStatement"
                        }
                    }
                ]
            },
            "rest": null,
            "generator": false,
            "expression": false
        },
        {
            "type": "IfStatement",
            "test": {
                "type": "Literal",
                "value": 1,
                "raw": "1"
            },
            "consequent": {
                "type": "BlockStatement",
                "body": [
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "SequenceExpression",
                            "expressions": [
                                {
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
                                },
                                {
                                    "type": "CallExpression",
                                    "callee": {
                                        "type": "Identifier",
                                        "name": "hello"
                                    },
                                    "arguments": []
                                }
                            ]
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "SequenceExpression",
                            "expressions": [
                                {
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
                                },
                                {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    "right": {
                                        "type": "Literal",
                                        "value": 1,
                                        "raw": "1"
                                    }
                                }
                            ]
                        }
                    }
                ]
            },
            "alternate": {
                "type": "BlockStatement",
                "body": [
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "SequenceExpression",
                            "expressions": [
                                {
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
                                },
                                {
                                    "type": "CallExpression",
                                    "callee": {
                                        "type": "Identifier",
                                        "name": "hello"
                                    },
                                    "arguments": []
                                }
                            ]
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "SequenceExpression",
                            "expressions": [
                                {
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
                                },
                                {
                                    "type": "AssignmentExpression",
                                    "operator": "=",
                                    "left": {
                                        "type": "Identifier",
                                        "name": "a"
                                    },
                                    "right": {
                                        "type": "Literal",
                                        "value": 2,
                                        "raw": "2"
                                    }
                                }
                            ]
                        }
                    }
                ]
            }
        }
    ]
}