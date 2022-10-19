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
                    text: "+"
                },
                {
                    opcode: "get",
                    blockType: Scratch.BlockType.REPORTER,
                    text: ","
                },
                {
                    opcode: "put",
                    blockType: Scratch.BlockType.COMMAND,
                    text: ". [CHAR]",
                    arguments: {
                        CHAR: {
                            type: Scratch.ArgumentType.STRING
                        }
                    }
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
    put(args) {
        if(args.STRING.length == 0 || args.STRING.length > 1)return;
        if(args.STRING.charCodeAt(0) < 0 || args.STRING.charCodeAt(0) > 255)return;
        this.memory[this.cursor] = args.STRING.charCodeAt(0)
    }
}
Scratch.extensions.register(new BrainFuck())