package junitprograms;

import static org.junit.jupiter.api.Assertions.*;

import java.time.Duration;

import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

class opencartapplogintest {
private static WebDriver driver=null;
private static WebDriverWait wait=null;
	@BeforeAll
	static void setUpBeforeClass() throws Exception {
		//launch the browser
		driver=new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(Duration.ofSeconds(10));
		driver.get("https://demo.opencart.com/en-gb?route=account/login");
		wait=new WebDriverWait(driver,Duration.ofMillis(20000));
		wait.until(ExpectedConditions.titleIs("Account Login"));
		Assertions.assertEquals(driver.getTitle(), "Account Login");
		
	}

	@AfterAll
	static void tearDownAfterClass() throws Exception {
		if(driver!=null) {
			driver.quit();
		}
	}

	@BeforeEach
	void setUp() throws Exception {
		driver.findElement(By.xpath("//span[normalize-space()='My Account']")).click();
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//a[@class='dropdown-item'][normalize-space()='Login']")));
		driver.findElement(By.xpath("//a[@class='dropdown-item'][normalize-space()='Login']")).click();
		wait.until(ExpectedConditions.titleContains("Account Login"));
		Assertions.assertEquals(driver.getTitle(), "Account Login");
		Assertions.assertTrue(driver.getTitle().contains("Account Login"),"Account Login page is not loaded");
		wait.until(ExpectedConditions.urlContains("oute=account/login"));
		wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector("form[id='form-login'] h2")));
		String loginHeaderTxt=driver.findElement(By.cssSelector("form[id='form-login'] h2")).getText();
		Assertions.assertEquals(loginHeaderTxt, "Returning Customer");
		
		
	}

	@AfterEach
	void tearDown() throws Exception {
	driver.manage().deleteAllCookies();	
	
	}

	@Test
	void testValidCredentials() {
		doLogin( "gopigabani1996@gmail.com","Test@123");	
	
		WebElement emailAddEditbox=driver.findElement(By.id("input-email"));
		
		emailAddEditbox.clear();
		
		emailAddEditbox.sendKeys("gopigabani1996@gmail.com");
		
	    WebElement passwordEditbox=driver.findElement(By.name("password"));
		
	    passwordEditbox.clear();
		
	    passwordEditbox.sendKeys("Test@123");
	    
	    driver.findElement(By.xpath("//button[normalize-space()='Login']"));
	
		
        wait.until(ExpectedConditions.titleIs("My Account"));
        Assertions.assertEquals(driver.getTitle(),"My Account");
        wait.until(ExpectedConditions.urlContains("oute=account/success"));
        
        //logout from the application
        //click on my account menu
        driver.findElement(By.xpath("//span[normalize-space()='My Account']")).click();
        //wait for the logout
        wait.until(ExpectedConditions.invisibilityOfElementLocated(By.linkText("Logout")));
        //click on logout link
        driver.findElement(By.linkText("Logout")).click();
        
        //wait for the account log out page title
        wait.until(ExpectedConditions.titleIs("Account Logout"));
        Assertions.assertEquals(driver.getTitle(),"Account Logout");
        wait.until(ExpectedConditions.urlContains("route=account/logout"));
        
        //wait for the account logout  heading
        wait.until(ExpectedConditions.presenceOfElementLocated(By.cssSelector("div[id='content'] h1")));
        
        //click on continue button
        driver.findElement(By.xpath("//a[@class='btn btn-primary']")).click();
        
        //wait for the page title
        wait.until(ExpectedConditions.titleIs("Account Login"));
		Assertions.assertEquals(driver.getTitle(), "Account Login");		
	}
	@Test
	void testEmptyCredentials() {
		doLogin("","");
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//dirv[@class='alert alert-danger alert-dismissible']")));
		String errMsg=driver.findElement(By.xpath("//dirv[@class='alert alert-danger alert-dismissible']")).getText();
		Assertions.assertTrue(errMsg.contains("No match for E-Mail Address and/or Password."));
	}

	@Test
	void testInvalidPwdCorrectEmail() {
		doLogin("gopigabani1996@gmail.com","ssdsdfsf");
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//dirv[@class='alert alert-danger alert-dismissible']")));
		String errMsg=driver.findElement(By.xpath("//dirv[@class='alert alert-danger alert-dismissible']")).getText();
		Assertions.assertTrue(errMsg.contains("No match for E-Mail Address and/or Password."));
	}

private void doLogin(String email,String pwd) {

	WebElement emailAddEditbox=driver.findElement(By.id("input-email"));
	
	emailAddEditbox.clear();
	
	emailAddEditbox.sendKeys(email);
	
    WebElement passwordEditbox=driver.findElement(By.name("password"));
	
    passwordEditbox.clear();
	
    passwordEditbox.sendKeys(pwd);
    
    driver.findElement(By.xpath("//button[normalize-space()='Login']")).click();
    
}
