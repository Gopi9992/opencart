package opencart_registration;

import java.util.List;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class opencart {
	public static void main(String[] args) {
		WebDriver driver = new ChromeDriver();
		 driver.get("https://demo.opencart.com/en-gb?route=account/register");
		 driver.manage().window().maximize();
		 WebElement firstname=driver.findElement(By.xpath("//input[@id='input-firstname']"));
		 firstname.sendKeys("Gopi");
		 WebElement lastname=driver.findElement(By.xpath("//input[@id='input-lastname']"));
		 lastname.sendKeys("Gabani");
		 WebElement email=driver.findElement(By.xpath("//input[@id='input-email']"));
		 email.sendKeys("gopi31@yopmail.com");
		 WebElement password=driver.findElement(By.xpath("//input[@id='input-password']"));
		 password.sendKeys("gopi3@");
		 JavascriptExecutor js = (JavascriptExecutor) driver;
         js.executeScript("window.scrollBy(0, 500)"); 
         WebElement privacypolicy=driver.findElement(By.xpath("//input[@name='agree']"));
         privacypolicy.click();
         driver.manage().timeouts().implicitlyWait(20,TimeUnit.SECONDS);
         WebElement button=driver.findElement(By.xpath("(//button[normalize-space()='Continue'])[1]"));
		 button.click();

		 }
}
