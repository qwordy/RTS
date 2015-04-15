var a, s, i;
console.log('node6'), a = [
    1,
    2,
    3,
    4
];
console.log('node7'), s = 0;
for (i in a) {
    if (a[i] < 0)
        console.log('node12'), process.exit(1);
    else
        console.log('node13'), s += a[i];
    break;
}
console.log('node15'), console.log(s);
console.log('node16'), hello();
function hello() {
    return;
    console.log('hello');
}
console.log('node17'), foo = function () {
};
console.log('node18'), s = 'asdf';
console.log('node19'), b = {};
console.log('node20'), b[s] = 1;
console.log('node21'), console.log(b);
{
    "type": "Program",
    "body": [
        {
            "type": "VariableDeclaration",
            "declarations": [
                {
                    "type": "VariableDeclarator",
                    "id": {
                        "type": "Identifier",
                        "name": "a"
                    },
                    "init": null
                },
                {
                    "type": "VariableDeclarator",
                    "id": {
                        "type": "Identifier",
                        "name": "s"
                    },
                    "init": null
                },
                {
                    "type": "VariableDeclarator",
                    "id": {
                        "type": "Identifier",
                        "name": "i"
                    },
                    "init": null
                }
            ],
            "kind": "var"
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
                                "value": "node6",
                                "raw": "node6"
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
                            "type": "ArrayExpression",
                            "elements": [
                                {
                                    "type": "Literal",
                                    "value": 1,
                                    "raw": "1"
                                },
                                {
                                    "type": "Literal",
                                    "value": 2,
                                    "raw": "2"
                                },
                                {
                                    "type": "Literal",
                                    "value": 3,
                                    "raw": "3"
                                },
                                {
                                    "type": "Literal",
                                    "value": 4,
                                    "raw": "4"
                                }
                            ]
                        }
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
                            "name": "s"
                        },
                        "right": {
                            "type": "Literal",
                            "value": 0,
                            "raw": "0"
                        }
                    }
                ]
            }
        },
        {
            "type": "ForInStatement",
            "left": {
                "type": "Identifier",
                "name": "i"
            },
            "right": {
                "type": "Identifier",
                "name": "a"
            },
            "body": {
                "type": "BlockStatement",
                "body": [
                    {
                        "type": "IfStatement",
                        "test": {
                            "type": "BinaryExpression",
                            "operator": "<",
                            "left": {
                                "type": "MemberExpression",
                                "computed": true,
                                "object": {
                                    "type": "Identifier",
                                    "name": "a"
                                },
                                "property": {
                                    "type": "Identifier",
                                    "name": "i"
                                }
                            },
                            "right": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0"
                            }
                        },
                        "consequent": {
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
                                        "type": "CallExpression",
                                        "callee": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                                "type": "Identifier",
                                                "name": "process"
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "name": "exit"
                                            }
                                        },
                                        "arguments": [
                                            {
                                                "type": "Literal",
                                                "value": 1,
                                                "raw": "1"
                                            }
                                        ]
                                    }
                                ]
                            }
                        },
                        "alternate": {
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
                                        "type": "AssignmentExpression",
                                        "operator": "+=",
                                        "left": {
                                            "type": "Identifier",
                                            "name": "s"
                                        },
                                        "right": {
                                            "type": "MemberExpression",
                                            "computed": true,
                                            "object": {
                                                "type": "Identifier",
                                                "name": "a"
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "name": "i"
                                            }
                                        }
                                    }
                                ]
                            }
                        }
                    },
                    {
                        "type": "BreakStatement",
                        "label": null
                    }
                ]
            },
            "each": false
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
                                "value": "node15",
                                "raw": "node15"
                            }
                        ]
                    },
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
                                "type": "Identifier",
                                "name": "s"
                            }
                        ]
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
                                "value": "node16",
                                "raw": "node16"
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
                        "type": "ReturnStatement",
                        "argument": null
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
                                    "value": "hello",
                                    "raw": "'hello'"
                                }
                            ]
                        }
                    }
                ]
            },
            "rest": null,
            "generator": false,
            "expression": false
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
                                "value": "node17",
                                "raw": "node17"
                            }
                        ]
                    },
                    {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                            "type": "Identifier",
                            "name": "foo"
                        },
                        "right": {
                            "type": "FunctionExpression",
                            "id": null,
                            "params": [],
                            "defaults": [],
                            "body": {
                                "type": "BlockStatement",
                                "body": []
                            },
                            "rest": null,
                            "generator": false,
                            "expression": false
                        }
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
                                "value": "node18",
                                "raw": "node18"
                            }
                        ]
                    },
                    {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                            "type": "Identifier",
                            "name": "s"
                        },
                        "right": {
                            "type": "Literal",
                            "value": "asdf",
                            "raw": "'asdf'"
                        }
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
                                "value": "node19",
                                "raw": "node19"
                            }
                        ]
                    },
                    {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                            "type": "Identifier",
                            "name": "b"
                        },
                        "right": {
                            "type": "ObjectExpression",
                            "properties": []
                        }
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
                                "value": "node20",
                                "raw": "node20"
                            }
                        ]
                    },
                    {
                        "type": "AssignmentExpression",
                        "operator": "=",
                        "left": {
                            "type": "MemberExpression",
                            "computed": true,
                            "object": {
                                "type": "Identifier",
                                "name": "b"
                            },
                            "property": {
                                "type": "Identifier",
                                "name": "s"
                            }
                        },
                        "right": {
                            "type": "Literal",
                            "value": 1,
                            "raw": "1"
                        }
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
                                "value": "node21",
                                "raw": "node21"
                            }
                        ]
                    },
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
                                "type": "Identifier",
                                "name": "b"
                            }
                        ]
                    }
                ]
            }
        }
    ]
}