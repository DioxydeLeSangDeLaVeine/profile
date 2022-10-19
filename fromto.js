class JavaScriptBasics {
    getInfo() {
        return {
            id: "javascriptscripts",
            name: "JavaScriptBasics",
            blocks: [
                {
                    opcode: "substring",
                    blockType: Scratch.BlockType.REPORTER,
                    text: '[STRING] from [START] to [END]',
                    arguments: {
                        STRING: {
                            type: Scratch.ArgumentType.STRING
                        },
                        START: {
                            type: Scratch.ArgumentType.NUMBER
                        },
                        END: {
                            type: Scratch.ArgumentType.END
                        }
                    }
                }
            ]
        }
    }
    substring(args) {
        return args.STRING.substring(args.START,args.END)
    }
}
Scratch.extensions.register(new JavaScriptBasics())