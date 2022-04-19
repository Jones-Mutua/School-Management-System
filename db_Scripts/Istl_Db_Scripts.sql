CREATE DATABASE istl_school_db;

USE istl_school_db;

CREATE TABLE Roles (
	Role_Id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    Role_Name VARCHAR(10) NOT NULL
);

CREATE TABLE Users (
	Users_Id INT NOT NULL AUTO_INCREMENT,
    User_Role INT NOT NULL,
    User_Email VARCHAR(50) NOT NULL,
    User_Password VARCHAR(255) NOT NULL,
    
    PRIMARY KEY (Users_Id,User_Email),
    CONSTRAINT Authentication_Role FOREIGN KEY(User_Role) REFERENCES Roles(Role_Id)
);

CREATE TABLE Assessments (
	Assessment_Id INT NOT NULL AUTO_INCREMENT,
    Assessment_Date DATE NOT NULL,
    Assessment_Start TIME NOT NULL,
    Assessment_End TIME NOT NULL,
    Assessment_Marks INT,

    PRIMARY KEY (Assessment_Id, Assessment_Marks)
);

CREATE TABLE Assessments_Questions(
	Assessment_Question_Id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    Assessment_Paper INT NOT NULL,
    Assessment_Question TEXT,
    
    CONSTRAINT Assessment_Unit_Paper FOREIGN KEY(Assessment_Paper) REFERENCES Assessments(Assessment_Id)
);

CREATE TABLE Exams (
	Exam_Id INT NOT NULL AUTO_INCREMENT,
    Exam_Date DATE NOT NULL,
    Exam_Start TIME NOT NULL,
    Exam_End TIME NOT NULL,
    Exam_Marks INT,
    
    PRIMARY KEY (Exam_Id,Exam_Marks)
);

CREATE TABLE Exam_Questions(
	Exam_Question_Id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    Exam_Paper INT NOT NULL,
    Exam_Question TEXT,
    
    CONSTRAINT Exam_Unit_Paper FOREIGN KEY(Exam_Paper) REFERENCES Exams(Exam_Id)
);

CREATE TABLE Teachers (
	Teacher_Id INT NOT NULL AUTO_INCREMENT,
    Teacher_UserId INT NOT NULL,
    Teacher_Email VARCHAR(60) NOT NULL,
    Staff_Id INT NOT NULL,
    Teacher_First_Name VARCHAR(15) NOT NULL,
    Teacher_Last_Name VARCHAR(15) NOT NULL,
    Date_of_Birth DATE NOT NULL,
    Teacher_Gender VARCHAR(10) NOT NULL,
    Teacher_Class INT NOT NULL,
    
    PRIMARY KEY (Teacher_Id, Teacher_First_Name),
    CONSTRAINT Teacher_Login_Credentials FOREIGN KEY(Teacher_UserId,Teacher_Email) REFERENCES Users(Users_Id,User_Email)
);

CREATE TABLE Units (
	Unit_Id INT NOT NULL AUTO_INCREMENT,
    Unit_Name VARCHAR(15) NOT NULL,
    Day_Taught VARCHAR(10) NOT NULL,
    Start_Time TIME NOT NULL,
    End_Time TIME NOT NULL,
    Unit_Teacher_Id INT,
    Unit_Teacher_Name VARCHAR(15),

    PRIMARY KEY (Unit_Id, Unit_Name),
    CONSTRAINT Unit_Lecturer FOREIGN KEY(Unit_Teacher_Id, Unit_Teacher_Name) REFERENCES Teachers(Teacher_Id, Teacher_First_Name)
);

CREATE TABLE Results (
	Results_Id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    Results_Unit_Id INT NOT NULL,
    Results_Unit_Name VARCHAR(15) NOT NULL,
    Assessment_Results_Id INT,
    Assessment_Results_Marks INT,
    Exam_Results_Id INT,
    Exam_Results_Marks INT,
    Total_Marks INT,
    Grade VARCHAR(2),
    
    CONSTRAINT Unit_Results FOREIGN KEY( Results_Unit_Id,Results_Unit_Name) REFERENCES Units(Unit_Id, Unit_Name),
    CONSTRAINT Cat_Marks FOREIGN KEY(Assessment_Results_Id ,Assessment_Results_Marks) REFERENCES Assessments(Assessment_Id, Assessment_Marks),
    CONSTRAINT Final_Paper FOREIGN KEY(Exam_Results_Id, Exam_Results_Marks) REFERENCES Exams(Exam_Id,Exam_Marks)
);


CREATE TABLE Classes (
	Class_Id INT NOT NULL AUTO_INCREMENT,
    Class_Name VARCHAR(15) NOT NULL,
    Class_Unit_Id INT,
    Class_Unit_Name VARCHAR(15),
    
    PRIMARY KEY (Class_Id, Class_Name),
    CONSTRAINT Class_Units FOREIGN KEY(Class_Unit_Id, Class_Unit_Name) REFERENCES Units(Unit_Id, Unit_Name)
);

CREATE TABLE Student_Registration (
	Registration_Id INT NOT NULL AUTO_INCREMENT,
    Registration_Number INT NOT NULL,
    Registration_Date DATE NOT NULL,
    
    PRIMARY KEY (Registration_Id,Registration_Number)
);

CREATE TABLE Students (
	Student_Id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    Reg_Id INT,
    Reg_Number INT NOT NULL,
    Student_UserId INT NOT NULL,
    Student_Email VARCHAR(60) NOT NULL,
    Student_First_Name VARCHAR(15) NOT NULL,
    Student_Last_Name VARCHAR(15) NOT NULL,
    Date_of_Birth DATE NOT NULL,
    Student_Gender VARCHAR(10) NOT NULL,
    Student_Class INT NOT NULL,
    
    CONSTRAINT Student_Login_Credentials FOREIGN KEY(Student_UserId,Student_Email) REFERENCES Users(Users_Id,User_Email),
    CONSTRAINT Student_Reg_Number FOREIGN KEY(Reg_Id,Reg_Number) REFERENCES Student_Registration(Registration_Id,Registration_Number),
    CONSTRAINT School_Class FOREIGN KEY(Student_Class) REFERENCES Classes(Class_Id)
);

CREATE TABLE Student_Attendance (
	Student_Attendance_Id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    Student INT NOT NULL,
    School_Date DATE NOT NULL,
    Student_Arrival TIME NOT NULL,
    Student_Depature TIME,
    
    CONSTRAINT Stud_Attendance FOREIGN KEY(Student) REFERENCES Students(Student_Id)
);

CREATE TABLE Teacher_Attendance (
	Teacher_Attendance_Id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    Teacher INT NOT NULL,
    Work_Date DATE NOT NULL,
    Teacher_Arrival TIME NOT NULL,
    Teacher_Depature TIME,
    
    CONSTRAINT Tch_Attendance FOREIGN KEY(Teacher) REFERENCES Teachers(Teacher_Id)
);

CREATE TABLE Student_Teacher (
	Teach_Id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    Student_ID INT NOT NULL,
    Teacher_ID INT NOT NULL,
    Class INT NOT NULL,
    
    CONSTRAINT Stud_Id FOREIGN KEY(Student_ID) REFERENCES Students(Student_Id),
    CONSTRAINT Tch_Id FOREIGN KEY(Teacher_ID) REFERENCES Teachers(Teacher_Id),
    CONSTRAINT Cls_Id FOREIGN KEY(Class) REFERENCES Classes(Class_Id)
);