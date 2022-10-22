class JavaScriptBasics {
    getInfo() {
        return {
            id: "javascriptscripts",
            name: "JavaScriptBasics",
            blocks: [
                {
                    opcode: "clientip",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "getClientIP"
                },
                {
                    opcode: "javascript",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "eval [CODE]",
                    arguments: {
                        CODE: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: " "
                        }
                    }
                },
                {
                    opcode: "printedjavascript",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "printEval [CODE]",
                    arguments: {
                        CODE: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: " "
                        }
                    }
                },
                {
                    opcode: "subString",
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'subString [STRING] from [START] to [END]',
                    arguments: {
                        STRING: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: " "
                        },
                        START: {
                            type: Scratch.ArgumentType.NUMBER
                        },
                        END: {
                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "charCode",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "charCode [STRING] at [INDEX]",
                    arguments: {
                        STRING: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: " "
                        },
                        INDEX: {
                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "indexOf",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "firstIndex [STRING] of [WORD] after [INDEX]",
                    arguments: {
                        STRING: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: " "
                        },
                        WORD: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: " "
                        },
                        INDEX: {
                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "lastIndexOf",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "lastIndex [STRING] of [WORD] after [INDEX]",
                    arguments: {
                        STRING: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: " "
                        },
                        WORD: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: " "
                        },
                        INDEX: {
                            type: Scratch.ArgumentType.NUMBER
                        }
                    }
                },
                {
                    opcode: "trim",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "trim [STRING]",
                    arguments: {
                        STRING: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: " "
                        }
                    }
                }
            ]
        }
    }
    customDatabase = {}
    javascript(args) {
        try {
            return eval(args.CODE)
        } catch(e) {
            return " "
        }
    }
    printedjavascript(args) {
        try {
            return eval(args.CODE)
        } catch(e) {
            return " "
        }
    }
    subString(args) {
        return args.STRING.substring(args.START,args.END)
    }
    charCode(args) {
        return args.STRING.charCodeAt(args.INDEX)
    }
    indexOf(args) {
        return args.STRING.indexOf(args.WORD,args.NUMBER)
    }
    lastIndexOf(args) {
        return args.STRING.lastIndexOf(args.WORD,args.NUMBER)
    }
    trim(args) {
        return args.STRING.trim()
    }
    clientip() {
        fetch('https://api.ipify.org/?format=json')
            .then(results=>results.json())
            .then(data=>{return data.ip})
    }
}
Scratch.extensions.register(new JavaScriptBasics())
