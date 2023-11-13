# Intro to Command Injection
-
Command Injection is a critical concern for web application security. In this presenation I'll delve into how this common vulnerability can compromise web applications and why it's vital for developers to be aware of it. Through a demonstration using a Node/Express application, we'll explore both the risks and the effective strategies to mitigate them. By the end of this presentation my objective is that you gain not only awareness but also practical insights into safeguarding your web applications against such threats

## Learning Objectives:
By the end of this presenation, attendees should be able to:
1. Understand the concept of Command Injection
2. Identify the impact of Command Injection
3. Recognize common vunerabilities in Web Applications
4. Learn how to prevent Command Injection'
5. Utilize resources for further learning

## What is Command Injection?

Command Injection is a type of Web Application vunerability when a hacker exploits an ability to execute system-level commands through the application. This typically happens when a hacker injects malicious commands in areas of the application that are intended for user input such as form fields for text inputs or file uploads. Even URL params can be exploited from this vunerability. These malicious commands are then executed by the application on the host operating system in order to gain control of the system. Learning how to prevent this vunerability is crucial maintaining the security of Web Applications.

## Demonstration: A simple example of the command injection vunerability using `node/express`

## Demonstration: How we can resolve the issue

## Conclusion

# Resources