$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/cucumber/bookLibrary.feature");
formatter.feature({
  "name": "Book Library",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Student Get",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I do a search http://localhost:8080 in the book library for students",
  "keyword": "Given "
});
formatter.match({
  "location": "GetHealthStep.IDoASearchInTheBookLibraryForStudents(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the client receives response status code of 200",
  "keyword": "Then "
});
formatter.match({
  "location": "GetHealthStep.theClientReceivesResponseStatusCodeOf(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Student Post - sucess",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I create a new student http://localhost:8080",
  "keyword": "When "
});
formatter.step({
  "name": "I fill in the following information \u003cauthor\u003e, \u003cnamebooks\u003e, \u003ctitle\u003e, \u003cemail\u003e, \u003cname\u003e, \u003cyears\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I\u0027ll send the request",
  "keyword": "Then "
});
formatter.step({
  "name": "the client receives response status code of 201",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "author",
        "namebooks",
        "title",
        "email",
        "name",
        "years"
      ]
    },
    {
      "cells": [
        "Leonardo Molinari",
        "Testes de software",
        "Produzindo sistemas melhores e mais confiáveis",
        "teste@gmail.com",
        "Bianca Jaqueline",
        "27"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Student Post - sucess",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I create a new student http://localhost:8080",
  "keyword": "When "
});
formatter.match({
  "location": "GetHealthStep.iCreateANewStudentHttpLocalhost(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill in the following information Leonardo Molinari, Testes de software, Produzindo sistemas melhores e mais confiáveis, teste@gmail.com, Bianca Jaqueline, 27",
  "keyword": "And "
});
formatter.match({
  "location": "GetHealthStep.iFillInTheFollowingInformationAuthorNameTitleCpfEmailNameYears(String,String,String,String,String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I\u0027ll send the request",
  "keyword": "Then "
});
formatter.match({
  "location": "GetHealthStep.iLlSendTheRequest()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the client receives response status code of 201",
  "keyword": "Then "
});
formatter.match({
  "location": "GetHealthStep.theClientReceivesResponseStatusCodeOf(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Student Post - error",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I create a new student http://localhost:8080",
  "keyword": "When "
});
formatter.step({
  "name": "fill in the information with cpf already registered \u003cauthor\u003e, \u003cnamebooks\u003e, \u003ctitle\u003e, \u003ccpf\u003e, \u003cemail\u003e, \u003cname\u003e, \u003cyears\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I\u0027ll send the request",
  "keyword": "Then "
});
formatter.step({
  "name": "the client receives response status code of \u003cstatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "author",
        "namebooks",
        "title",
        "cpf",
        "email",
        "name",
        "years",
        "status"
      ]
    },
    {
      "cells": [
        "Leonardo Molinari",
        "Testes de software",
        "Produzindo sistemas melhores e mais confiáveis",
        "09705066619",
        "teste@gmail.com",
        "Bianca Jaqueline",
        "27",
        "400"
      ]
    },
    {
      "cells": [
        "",
        "",
        "",
        "00000",
        "teste@gmail.com",
        "",
        "27",
        "400"
      ]
    },
    {
      "cells": [
        "",
        "",
        "",
        "",
        "",
        "Bianca Jaqueline",
        "27",
        "400"
      ]
    },
    {
      "cells": [
        "Leonardo Molinari",
        "Testes de software",
        "",
        "",
        "teste@gmail.com",
        "Bianca Jaqueline",
        "1",
        "400"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Student Post - error",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I create a new student http://localhost:8080",
  "keyword": "When "
});
formatter.match({
  "location": "GetHealthStep.iCreateANewStudentHttpLocalhost(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "fill in the information with cpf already registered Leonardo Molinari, Testes de software, Produzindo sistemas melhores e mais confiáveis, 09705066619, teste@gmail.com, Bianca Jaqueline, 27",
  "keyword": "And "
});
formatter.match({
  "location": "GetHealthStep.iFillInTheFollowingInformationAuthorNameTitleCpfEmailNameYears(String,String,String,String,String,String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I\u0027ll send the request",
  "keyword": "Then "
});
formatter.match({
  "location": "GetHealthStep.iLlSendTheRequest()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the client receives response status code of 400",
  "keyword": "Then "
});
formatter.match({
  "location": "GetHealthStep.theClientReceivesResponseStatusCodeOf(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Student Post - error",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I create a new student http://localhost:8080",
  "keyword": "When "
});
formatter.match({
  "location": "GetHealthStep.iCreateANewStudentHttpLocalhost(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "fill in the information with cpf already registered , , , 00000, teste@gmail.com, , 27",
  "keyword": "And "
});
formatter.match({
  "location": "GetHealthStep.iFillInTheFollowingInformationAuthorNameTitleCpfEmailNameYears(String,String,String,String,String,String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I\u0027ll send the request",
  "keyword": "Then "
});
formatter.match({
  "location": "GetHealthStep.iLlSendTheRequest()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the client receives response status code of 400",
  "keyword": "Then "
});
formatter.match({
  "location": "GetHealthStep.theClientReceivesResponseStatusCodeOf(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Student Post - error",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I create a new student http://localhost:8080",
  "keyword": "When "
});
formatter.match({
  "location": "GetHealthStep.iCreateANewStudentHttpLocalhost(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "fill in the information with cpf already registered , , , , , Bianca Jaqueline, 27",
  "keyword": "And "
});
formatter.match({
  "location": "GetHealthStep.iFillInTheFollowingInformationAuthorNameTitleCpfEmailNameYears(String,String,String,String,String,String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I\u0027ll send the request",
  "keyword": "Then "
});
formatter.match({
  "location": "GetHealthStep.iLlSendTheRequest()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the client receives response status code of 400",
  "keyword": "Then "
});
formatter.match({
  "location": "GetHealthStep.theClientReceivesResponseStatusCodeOf(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Student Post - error",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I create a new student http://localhost:8080",
  "keyword": "When "
});
formatter.match({
  "location": "GetHealthStep.iCreateANewStudentHttpLocalhost(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "fill in the information with cpf already registered Leonardo Molinari, Testes de software, , , teste@gmail.com, Bianca Jaqueline, 1",
  "keyword": "And "
});
formatter.match({
  "location": "GetHealthStep.iFillInTheFollowingInformationAuthorNameTitleCpfEmailNameYears(String,String,String,String,String,String,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I\u0027ll send the request",
  "keyword": "Then "
});
formatter.match({
  "location": "GetHealthStep.iLlSendTheRequest()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the client receives response status code of 400",
  "keyword": "Then "
});
formatter.match({
  "location": "GetHealthStep.theClientReceivesResponseStatusCodeOf(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Student GET CPF",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "that I do a http://localhost:8080 search for students \u003ccpf\u003e",
  "keyword": "Given "
});
formatter.step({
  "name": "the client receives response status code of \u003cstatus\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "cpf",
        "status"
      ]
    },
    {
      "cells": [
        "09705066619",
        "200"
      ]
    },
    {
      "cells": [
        "09705066611",
        "500"
      ]
    },
    {
      "cells": [
        "xxxxxxxxxxx",
        "500"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Student GET CPF",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "that I do a http://localhost:8080 search for students 09705066619",
  "keyword": "Given "
});
formatter.match({
  "location": "GetHealthStep.thatIDoAHttpLocalhostSearchForStudentsCpf(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the client receives response status code of 200",
  "keyword": "Then "
});
formatter.match({
  "location": "GetHealthStep.theClientReceivesResponseStatusCodeOf(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Student GET CPF",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "that I do a http://localhost:8080 search for students 09705066611",
  "keyword": "Given "
});
formatter.match({
  "location": "GetHealthStep.thatIDoAHttpLocalhostSearchForStudentsCpf(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the client receives response status code of 500",
  "keyword": "Then "
});
formatter.match({
  "location": "GetHealthStep.theClientReceivesResponseStatusCodeOf(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Student GET CPF",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "that I do a http://localhost:8080 search for students xxxxxxxxxxx",
  "keyword": "Given "
});
formatter.match({
  "location": "GetHealthStep.thatIDoAHttpLocalhostSearchForStudentsCpf(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the client receives response status code of 500",
  "keyword": "Then "
});
formatter.match({
  "location": "GetHealthStep.theClientReceivesResponseStatusCodeOf(int)"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "student Update",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I Update student http://localhost:8080",
  "keyword": "When "
});
formatter.step({
  "name": "I fill in Update information \u003cemail\u003e, \u003cname\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I\u0027ll send the request Update \u003ccpf\u003e",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "name",
        "cpf"
      ]
    },
    {
      "cells": [
        "teste@gmail.com",
        "Bianca Jaqueline",
        "09705066618"
      ]
    }
  ]
});
formatter.scenario({
  "name": "student Update",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I Update student http://localhost:8080",
  "keyword": "When "
});
formatter.match({
  "location": "GetHealthStep.iUpdateStudentHttpLocalhostCpf(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I fill in Update information teste@gmail.com, Bianca Jaqueline",
  "keyword": "And "
});
formatter.match({
  "location": "GetHealthStep.iFillInUpdateInformationEmailName(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I\u0027ll send the request Update 09705066618",
  "keyword": "Then "
});
formatter.match({
  "location": "GetHealthStep.iLlSendTheRequestUpdateCpf(String)"
});
formatter.result({
  "status": "passed"
});
});