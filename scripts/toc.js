"use strict";

const tocEntries = {
    "Codeplay - Console Log": "assignments/code_play-js_console.html",
    "Smarter Way to Learn": "assignments/swtl/swtl_1_10.html",
    "FizzBuzz 0, Part 1": "assignments/fizzbuzz/fizzbuzz0_part1.html",
    "FizzBuzz 0, Part 2": "assignments/fizzbuzz/fizzbuzz0_part2.html",
    "FizzBuzz 1": "assignments/fizzbuzz/fizzbuzz1.html",
    "FizzBuzz 2": "assignments/fizzbuzz/fizzbuzz2.html",
    "FizzBuzz 3": "assignments/fizzbuzz/fizzbuzz3.html",
    "FizzBuzz 4": "assignments/fizzbuzz/fizzbuzz4.html",
    "One Page JS Site - Original": "onepage_original/unfold-free-lite/index.html",
    "One Page JS Site - Modified": "onepage_modified/unfold-free-lite/index.html"
};

function assembleToc() {
    let retVal = "";

    Object.entries(tocEntries).forEach(i => {
        retVal += "<li><a href=" + i[1] + ">" + i[0] + "</a></li>";
    });

    $("#assignment-toc-list").html(retVal);
}

$(document).ready(function(){
    assembleToc();

});