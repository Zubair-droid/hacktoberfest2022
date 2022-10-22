package controller;

import java.util.Scanner;

public class Student {

	private String name;
	private int rollno;
	private int classroom;
	

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getRollno() {
		return rollno;
	}

	public void setRollno(int rollno) {
		this.rollno = rollno;
	}

	public int getClassroom() {
		return classroom;
	}

	public void setClassroom(int classroom) {
		this.classroom = classroom;
	}


	public Student(String name, int rollno, int classroom) {
		super();
		this.name = name;
		this.rollno = rollno;
		this.classroom = classroom;
	}
	

	public Student() {
		super();
		// TODO Auto-generated constructor stub
	}
	

	@Override
	public String toString() {
		return "Student [ Name = " + name + ", Rollno = " + rollno + ", Classroom No. = " + classroom + " ]";
	}

	
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub

		Student s = new Student();
		s.setName("Gayu");
		s.setClassroom(1);
		s.setRollno(12);
		
		
		
		System.out.println(s);
		
	
	}

}
