class JSONDataBase {
    getInfo() {
        return {
            id: "jsondatabase",
            name: "JSON Data Base",
            blocks: [
                {
                    opcode: "bcursor",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "cursor [PATH]",
                    arguments: {
                        PATH: {
                            type: "Scratch.ArgumentType.String",
                            defaultValue: " "
                        }
                    }
                },
                {
                    opcode: "getvalue",
                    blockType: Scratch.BlockType.REPORTER,
                    text: "getValue [KEY]",
                    arguments: {
                        KEY: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: " "
                        }
                    }
                }
            ]
        }
    }
    database = {}
    cursor = ""
    bcursor(args) {
        if(args.PATH == "") this.cursor=this.cursor.substring(this.cursor.lastIndexOf('['),this.cursor.length)
        else this.cursor = this.cursor.concat(`[${args.PATH}]`)
    }
    getvalue(args) {
        return this.cursor
    }
}
Scratch.extensions.register(new JSONDataBase())
