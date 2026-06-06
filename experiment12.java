@RestController
@RequestMapping("/emp")
public class EmpController {
List<String> emp = new ArrayList<>();
@PostMapping("/add")
public String add(){
emp.add("Rahul");
return "Added";
}
@GetMapping
public List<String> get(){ return emp; }
@DeleteMapping("/{id}")
public String del(@PathVariable int id){
emp.remove(id);
return "Deleted";
}
}