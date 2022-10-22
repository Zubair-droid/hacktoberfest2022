package Strings;

public class StringsChapter {

	public static String strip(String text) {
	
		return text.trim();
	}
	
	public static void main(String[] args) {
		
		String myString = "  abcdefg  ";
		
		//String myText = strip(myString);
		
		System.out.format("'%s'",myString);
	}
}
