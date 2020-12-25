// Python Tutorial Documents

$("#pt00").click(function () {
    $.ajax({
        url: "static/html/doc/python-tutorial/00. Python Tutorial.html",
        success: function (result) {
            $("#content").html(result);
        }
    });
});


$("#pt01").click(function () {
    $.ajax({
        url: "static/html/doc/python-tutorial/01. Python Tutorial - Introduction to Python.html",
        success: function (result) {
            $("#content").html(result);
        }
    });
});



$("#pt02").click(function () {
    $.ajax({
        url: "static/html/doc/python-tutorial/02. Python Tutorial - Basic Operator.html",
        success: function (result) {
            $("#content").html(result);
        }
    });
});


$("#pt03").click(function () {
    $.ajax({
        url: "static/html/doc/python-tutorial/03. Python Tutorial - Identifier.html",
        success: function (result) {
            $("#content").html(result);
        }
    });
});


$("#pt04").click(function () {
    $.ajax({
        url: "static/html/doc/python-tutorial/04. Python Tutorial - Python Types.html",
        success: function (result) {
            $("#content").html(result);
        }
    });
});


// Python Tutorial Summary

$("#pts00").click(function () {
    $.ajax({
        url: "static/html/doc/python-tutorial/summary/00. Python Tutorial Summary.html",
        success: function (result) {
            $("#content").html(result);
        }
    });
});


$("#pts01").click(function () {
    $.ajax({
        url: "static/html/doc/python-tutorial/summary/01. Python Tutorial Summary Part 2.html",
        success: function (result) {
            $("#content").html(result);
        }
    });
});



$("#pts02").click(function () {
    $.ajax({
        url: "static/html/doc/python-tutorial/summary/02. Why need Data Structure.html",
        success: function (result) {
            $("#content").html(result);
        }
    });
});


// Web Tutorial Documents

$("#pwt00").click(function () {
    $.ajax({
        url: "static/html/doc/web-tutorial/00. Python and Web.html",
        success: function (result) {
            $("#content").html(result);
        }
    });
});


$("#pwt01").click(function () {
    $.ajax({
        url: "static/html/doc/web-tutorial/01. Python and Web Part 2.html",
        success: function (result) {
            $("#content").html(result);
        }
    });
});
