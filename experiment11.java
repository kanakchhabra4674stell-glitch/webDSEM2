@RestController
public class StudentController {
@GetMapping("/")
public String home(){ return "Welcome"; }
@GetMapping("/student")
public String student(){ return "Rahul - BCA"; }
@PostMapping("/add")
public String add(){ return "Student Added"; }
}