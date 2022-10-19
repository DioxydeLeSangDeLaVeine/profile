class BrainFuck {
    getInfo() {
        return {
            id: "BrainFuck",
            name: "BrainFuck",
            blocks: [
                {
                    opcode: "left",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "<"
                },
                {
                    opcode: "right",
                    blockType: Scratch.BlockType.COMMAND,
                    text: ">"
                },
                {
                    opcode: "plus",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "+"
                },
                {
                    opcode: "moins",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "-"
                },
                {
                    opcode: "get",
                    blockType: Scratch.BlockType.REPORTER,
                    text: ","
                },
                {
                    opcode: "getCode",
                    blockType: Scratch.BlockType.REPORTER,
                    text: ";"
                },
                {
                    opcode: "put",
                    blockType: Scratch.BlockType.COMMAND,
                    text: ". [CHAR]",
                    arguments: {
                        CHAR: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "E"
                        }
                    }
                },
                {
                    opcode: "reset",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "/"
                },
                {
                    opcode: "RESET",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "//"
                },
                {
                    opcode: "reverse",
                    blockType: Scratch.BlockType.COMMAND,
                    text: "\\"
                }
            ]
        }
    }
    memory = [0]
    cursor = 0
    left(args) {
        if(this.cursor-1 < 0) this.memory.unshift(0)
        else this.cursor-=1
    }
    right(args) {
        if(this.memory.length < this.cursor+2) {
            this.memory.push(0)
            this.cursor+=1
        } else this.cursor+=1
    }
    plus(args) {
        if(this.memory[this.cursor]+1 > 255)this.memory[this.cursor]=0
        else this.memory[this.cursor]+=1
    }
    moins(args) {
        if(this.memory[this.cursor]+1 < 0)this.memory[this.cursor]=255
        else this.memory[this.cursor]-=1
    }
    get(args) {
        return String.fromCharCode(this.memory[this.cursor])
    }
    getCode(args) {
        return this.memory[this.cursor]
    }
    put(args) {
        if(args.CHAR.length == 0 || args.CHAR.length > 1)return;
        if(args.CHAR.charCodeAt(0) < 0 || args.CHAR.charCodeAt(0) > 255)return;
        this.memory[this.cursor] = args.CHAR.charCodeAt(0)
    }
    reset(args) {
        this.memory[this.cursor] = 0
    }
    RESET(args) {
        this.memory = [0]
        this.cursor = 0
    }
    reverse(args) {
        this.memory[this.cursor] = 255-this.memory[this.cursor]
    }
}
Scratch.extensions.register(new BrainFuck())
