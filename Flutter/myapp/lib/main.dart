import 'package:flutter/material.dart';

void main()
{
  runApp(MaterialApp(
    title:"Flipkart App",
    home:HomePage(),
    ) 
  );
}


class HomePage extends StatelessWidget{
  @override
  Widget build(BuildContext context){
    return Scaffold(
      appBar: AppBar(
        title:Text("Hello World"),
        
      ),

      body:Center(
        child: Container(
          child:Text("hello Mohit"),
          ),
      )
      
    );
  }

}
