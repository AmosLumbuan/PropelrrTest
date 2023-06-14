class User{  
    String name;
    int age;     
  
    User(String n, int a){   
    name = n;
    age = a;  
    }  
  
    void printDetails(){
        System.out.println("Name: "+name+" | Age: "+age);
    }

        
}

class UserCreator{
    public static void main(String args[]){
        User user1 = new User("John",26);
        user1.printDetails();
    }
}