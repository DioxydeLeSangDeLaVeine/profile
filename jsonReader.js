class JavaScriptBasics {
    getInfo() {
        return {
            id: "jsonreaderscripts",
            name: "JSON Reader",
            blocks: [
                {
                    opcode: "object_getkey",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "OBJECT [PARSEDJSON] getKey [KEY]",
                    arguments: {
                        PARSEDJSON: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "{}"
                        },
                        KEY: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: " "
                        }
                    }
                }
            ]
        }
    }
    object_getkey(args) {
        return JSON.stringify(JSON.parse(args.PARSEDJSON)[args.KEY])
    }
}
Scratch.extensions.register(new JavaScriptBasics())
