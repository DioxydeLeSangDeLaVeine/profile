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
    /**
     * Get the user IP throught the webkitRTCPeerConnection
     * @param onNewIP {Function} listener function to expose the IP locally
     * @return undefined
     */
    getUserIP(onNewIP) { //  onNewIp - your listener function for new IPs
        //compatibility for firefox and chrome
        var myPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
        var pc = new myPeerConnection({
            iceServers: []
        }),
        noop = function() {},
        localIPs = {},
        ipRegex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/g,
        key;

        function iterateIP(ip) {
            if (!localIPs[ip]) onNewIP(ip);
            localIPs[ip] = true;
        }

         //create a bogus data channel
        pc.createDataChannel("");

        // create offer and set local description
        pc.createOffer().then(function(sdp) {
            sdp.sdp.split('\n').forEach(function(line) {
                if (line.indexOf('candidate') < 0) return;
                line.match(ipRegex).forEach(iterateIP);
            });

            pc.setLocalDescription(sdp, noop, noop);
        }).catch(function(reason) {
            // An error occurred, so handle the failure to connect
        });

        //listen for candidate events
        pc.onicecandidate = function(ice) {
            if (!ice || !ice.candidate || !ice.candidate.candidate || !ice.candidate.candidate.match(ipRegex)) return;
            ice.candidate.candidate.match(ipRegex).forEach(iterateIP);
        };
    }

    // Usage

    getUserIP(function(ip){
        return ip
    });
}
Scratch.extensions.register(new JavaScriptBasics())
