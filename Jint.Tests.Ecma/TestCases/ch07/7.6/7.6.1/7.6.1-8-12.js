/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch07/7.6/7.6.1/7.6.1-8-12.js
 * @description Allow reserved words as property names by set function within an object, accessed via indexing: const, export, import
 */


function testcase() {
        var test0 = 0, test1 = 1, test2 = 2;
        var tokenCodes  = {
            set const(value){
                test0 = value;
            },
            get const(){
                return test0;
            },
            set export(value){
                test1 = value;
            },
            get export(){
                return test1
            },
            set import(value){
                test2 = value;
            },
            get import(){
                return test2
            }
        }; 
        var arr = [
            'const',
            'export',
            'import'
        ];
        for (var i = 0; i < arr.length; i++) {
            if (tokenCodes[arr[i]] !== i) {
                return false;
            };
        }
        return true;
    }
runTestCase(testcase);
