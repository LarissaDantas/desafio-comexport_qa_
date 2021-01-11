# new feature
# Tags: optional

Feature: Book Library

  Scenario: Student Get
    Given I do a search http://localhost:8080 in the book library for students
    Then the client receives response status code of 200

  Scenario Outline: Student Post - sucess
    When I create a new student http://localhost:8080
    And I fill in the following information <author>, <namebooks>, <title>, <email>, <name>, <years>
    Then I'll send the request
    Then the client receives response status code of 201

    Examples:
      | author            | namebooks          | title                                          | email           | name             | years |
      | Leonardo Molinari | Testes de software | Produzindo sistemas melhores e mais confiáveis | teste@gmail.com | Bianca Jaqueline | 27    |

  Scenario Outline: Student Post - error
    When I create a new student http://localhost:8080
    And fill in the information with cpf already registered <author>, <namebooks>, <title>, <cpf>, <email>, <name>, <years>
    Then I'll send the request
    Then the client receives response status code of <status>

    Examples:
      | author            | namebooks          | title                                          | cpf         | email           | name             | years | status |
      | Leonardo Molinari | Testes de software | Produzindo sistemas melhores e mais confiáveis | 09705066619 | teste@gmail.com | Bianca Jaqueline | 27    | 400    |
      |                   |                    |                                                | 00000       | teste@gmail.com |                  | 27    | 400    |
      |                   |                    |                                                |             |                 | Bianca Jaqueline | 27    | 400    |
      | Leonardo Molinari | Testes de software |                                                |             | teste@gmail.com | Bianca Jaqueline | 1     | 400    |

  Scenario Outline: Student GET CPF
    Given that I do a http://localhost:8080 search for students <cpf>
    Then the client receives response status code of <status>

    Examples:
      | cpf         | status |
      | 09705066619 | 200    |
      | 09705066611 | 500    |
      | xxxxxxxxxxx | 500    |

  Scenario Outline: student Update
    When I Update student http://localhost:8080
    And I fill in Update information <email>, <name>
    Then I'll send the request Update <cpf>

    Examples:
      | email           | name             | cpf         |
      | teste@gmail.com | Bianca Jaqueline | 09705066618 |
