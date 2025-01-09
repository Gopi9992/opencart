package opencart_login;

//import java.util.List;
//import java.util.Set;
//import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
//import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
//import org.openqa.selenium.interactions.Actions;


public class opencart {
	public static void main(String[] args) {
		WebDriver driver = new ChromeDriver();
		 driver.get("https://demo.opencart.com/en-gb?route=account/login");
		 driver.manage().window().maximize();
		 WebElement Email=driver.findElement(By.xpath("//input[@id='input-email']"));
		 Email.sendKeys("gopi4@yopmail.com");
		 WebElement Password=driver.findElement(By.xpath("//input[@id='input-password']"));
		 Password.sendKeys("1234");
		 WebElement button=driver.findElement(By.xpath("//button[@type='submit']"));
		 button.click();
	}

}
