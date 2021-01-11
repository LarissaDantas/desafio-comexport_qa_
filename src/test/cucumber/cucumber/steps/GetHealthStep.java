package cucumber.steps;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.cucumber.java.Before;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;

import java.util.ArrayList;
import java.util.List;

import static org.hamcrest.Matchers.*;
import static org.junit.Assert.assertThat;
import static org.springframework.http.HttpMethod.*;


public class GetHealthStep {

    private ResponseEntity<String> response;
    private TestRestTemplate template;
    private String url;
    private String endpoint;
    private Resp resp;
    private List<Books> books = new ArrayList<>();
    private StudentUpdateDTO updateDTO;


    @Before
    public void before() {
        template = new TestRestTemplate();
    }

    @When("the client calls (.*) /ws/(.*)/json")
    public void theClientCallsHttpsViacepComBrWsCEPJson(final String url, final String cep) {
        response = template.getForEntity(url.concat("/ws/"+ cep +"/json"), String.class);
        System.out.println("--------------------");
        System.out.println(resp);
    }

    @When("I do a search (.*) in the book library for students")
    public void IDoASearchInTheBookLibraryForStudents(final String url){
        response = template.getForEntity(url.concat("/students"), String.class);
    }


    @Then("the client receives response status code of (.*)")
    public void theClientReceivesResponseStatusCodeOf(int statusCode) {
        var currentStatusCode = response.getStatusCode().value();
        final var body = response.getBody();
        assertThat("status code is incorrect: ".concat(body), currentStatusCode, is(statusCode));

        System.out.println("--------------------");
        System.out.println(response);
    }

    @When("I create a new student (.*)")
    public void iCreateANewStudentHttpLocalhost(final String url) {
        this.url = url;
    }

    @And("I fill in the following information (.*), (.*), (.*), (.*), (.*), (.*)")
    public void iFillInTheFollowingInformationAuthorNameTitleCpfEmailNameYears(
            final String author, final String namebooks, final String title,
            final String email, final String name, final int years) {

        books.add(Books
                .builder()
                .author(author)
                .name(namebooks)
                .title(title)
                .build());

        resp = Resp
                .builder()
                .books(books)
                .cpf(geraCPF())
                .email(email)
                .name(name)
                .years(years)
                .build();

    }

    @And("fill in the information with cpf already registered (.*), (.*), (.*), (.*), (.*), (.*), (.*)")
    public void iFillInTheFollowingInformationAuthorNameTitleCpfEmailNameYears(
            final String author, final String namebooks, final String title, final String cpf,
            final String email, final String name, final int years) {

        books.add(Books
                .builder()
                .author(author)
                .name(namebooks)
                .title(title)
                .build());

        resp = Resp
                .builder()
                .books(books)
                .cpf(cpf)
                .email(email)
                .name(name)
                .years(years)
                .build();

    }


    private static String calcDigVerif(String num) {

        Integer primDig, segDig;
        int soma = 0, peso = 10;
        for (int i = 0; i < num.length(); i++)
            soma += Integer.parseInt(num.substring(i, i + 1)) * peso--;

        if (soma % 11 == 0 | soma % 11 == 1)
            primDig = new Integer(0);
        else
            primDig = new Integer(11 - (soma % 11));

        soma = 0;
        peso = 11;
        for (int i = 0; i < num.length(); i++)
            soma += Integer.parseInt(num.substring(i, i + 1)) * peso--;

        soma += primDig.intValue() * 2;
        if (soma % 11 == 0 | soma % 11 == 1)
            segDig = new Integer(0);
        else
            segDig = new Integer(11 - (soma % 11));

        return primDig.toString() + segDig.toString();
    }

    public static String geraCPF() {
        String iniciais = "";
        Integer numero;
        for (int i = 0; i < 9; i++) {
            numero = new Integer((int) (Math.random() * 10));
            iniciais += numero.toString();
        }
        return iniciais + calcDigVerif(iniciais);
    }

    @Then("I'll send the request")
    public void iLlSendTheRequest() throws JsonProcessingException {

        final var httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_JSON);

        resp.setBooks(books);

        String writeValueAsString = new ObjectMapper().writeValueAsString(resp);
        final var httpEntity = new HttpEntity<Object>(writeValueAsString, httpHeaders);
        final var endpoint = url.concat("/students");

        System.out.println("--------------------");
        System.out.println(endpoint);
        System.out.println("--------------------");
        System.out.println(writeValueAsString);
        System.out.println("--------------------");
        response = template.exchange(endpoint, POST, httpEntity, String.class);
    }

    @Given("that I do a (.*) search for students (.*)")
    public void thatIDoAHttpLocalhostSearchForStudentsCpf(final String url, final String cpf){
        response = template.getForEntity(url.concat("/students/" + cpf), String.class);
    }

    @When("I Update student (.*)")
    public void iUpdateStudentHttpLocalhostCpf(final String url) {
        this.url = url;
    }

    @And("I fill in Update information (.*), (.*)")
    public void iFillInUpdateInformationEmailName(final String email, final String nome) {
        updateDTO = StudentUpdateDTO
                .builder()
                .email(email)
                .name(nome)
                .build();
    }

    @Then("I'll send the request Update (.*)")
    public void iLlSendTheRequestUpdateCpf(final String cpf) throws JsonProcessingException {

        final var httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_JSON);


        String writeValueAsString = new ObjectMapper().writeValueAsString(updateDTO);
        final var httpEntity = new HttpEntity<Object>(writeValueAsString, httpHeaders);
        final var endpoint = url.concat("/students/" + cpf);

        System.out.println("--------------------");
        System.out.println(endpoint);
        System.out.println("--------------------");
        System.out.println(writeValueAsString);
        System.out.println("--------------------");
        response = template.exchange(endpoint, PATCH, httpEntity, String.class);
    }
}

