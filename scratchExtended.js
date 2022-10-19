class JavaScriptBasics {
    getInfo() {
        return {
            id: "javascriptscripts",
            name: "JavaScriptBasics",
            blocks: [
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
                }
            ]
        }
    }
    javascript(args) {
        try {
            eval(args.CODE)
        } catch(e) {
            return "Error.."
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
}
Scratch.extensions.register(new JavaScriptBasics())
