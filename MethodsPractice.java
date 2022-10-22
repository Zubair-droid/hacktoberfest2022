package methods;


class Car {
	
	private String model;
	private int mileage;
	private String engine;
	
	
	
	public String getModel() {
		return model;
	}
	public void setModel(String model) {
		this.model = model;
	}
	public int getMileage() {
		return mileage;
	}
	public void setMileage(int mileage) {
		this.mileage = mileage;
	}
	public String getEngine() {
		return engine;
	}
	public void setEngine(String engine) {
		this.engine = engine;
	}
	
	
}



public class MethodsPractice {
	
	public static int strokes = 5;
	
	public static void main(String[] args) {
	
		Car car = new Car();
		car.setModel("Harrier");
	    System.out.println(car.getModel());	
	    
	    System.out.println(strokes);
	    
	}
}
