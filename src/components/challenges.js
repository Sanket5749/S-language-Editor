export const challenges = [
  {
    level: 1,
    title: "Print Hello",
    task: "Print 'Hello, World!'",
    hint: "Use dikhao with a string.",
    starter: `dikhao "Hello, World!";`,
    expectedOutput: `Hello, World!\n`
  },
  {
    level: 2,
    title: "Greeting with Name",
    task: "Declare a variable and print 'Welcome, <name>'.",
    hint: "Use banao and dikhao with concatenation.",
    starter: `banao name = "Sanket";\ndikhao "Welcome, " + name;`,
    expectedOutput: `Welcome, Sanket\n`
  },
  {
    level: 3,
    title: "Sum Two Numbers",
    task: "Declare two numbers and print their sum.",
    hint: "Use banao a, b and dikhao a + b.",
    starter: `banao a = 5;\nbanao b = 7;\ndikhao a + b;`,
    expectedOutput: `12\n`
  },
  {
    level: 4,
    title: "Positive or Negative",
    task: "Check whether a number is positive or negative.",
    hint: "Use yadi and nahito with comparison.",
    starter: `banao num = -3;\nyadi num > 0 {\n  dikhao "Positive";\n} nahito {\n  dikhao "Negative";\n}`,
    expectedOutput: `Negative\n`
  },
  {
    level: 5,
    title: "Loop 1 to 10",
    task: "Print numbers from 1 to 10.",
    hint: "Use jabtak with dikhao inside.",
    starter: `banao i;\njabtak i = 1; i <= 10; i++ {\n  dikhao i;\n}`,
    expectedOutput: `1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n`
  },
  {
    level: 6,
    title: "Even or Odd",
    task: "For numbers 1 to 10, print whether they're even or odd.",
    hint: "Use i % 2 == 0 inside yadi.",
    starter: `banao i;\njabtak i = 1; i <= 10; i++ {\n  dikhao i;\n  yadi i % 2 == 0 {\n    dikhao "Even";\n  } nahito {\n    dikhao "Odd";\n  }\n}`,
    expectedOutput: `1\nOdd\n2\nEven\n3\nOdd\n4\nEven\n5\nOdd\n6\nEven\n7\nOdd\n8\nEven\n9\nOdd\n10\nEven\n`
  },
  {
    level: 7,
    title: "Print Fruits",
    task: "Loop through an array of fruits and print each.",
    hint: "Use jabtak with fruits[i].",
    starter: `banao fruits = ["apple", "banana", "cherry"];\nbanao i;\njabtak i = 0; i < 3; i++ {\n  dikhao fruits[i];\n}`,
    expectedOutput: `apple\nbanana\ncherry\n`
  },
  {
    level: 8,
    title: "Reverse Array",
    task: "Print elements of an array in reverse order.",
    hint: "Start loop from last index to 0.",
    starter: `banao fruits = ["apple", "banana", "cherry"];\nbanao i;\njabtak i = 2; i >= 0; i-- {\n  dikhao fruits[i];\n}`,
    expectedOutput: `cherry\nbanana\napple\n`
  },
  {
    level: 9,
    title: "Grade Checker",
    task: "Write a function grade(marks) that prints 'Pass' if marks ≥ 40, else 'Fail'.",
    hint: "Use yadi inside kaam.",
    starter: `kaam grade(marks) {\n  yadi marks >= 40 {\n    dikhao "Pass";\n  } nahito {\n    dikhao "Fail";\n  }\n}\ngrade(55);`,
    expectedOutput: `Pass\n`
  },
  {
    level: 10,
    title: "Formatted Greeting",
    task: "Create format(name) that prints 'Welcome, <name>!'",
    hint: "Use kaam and string joining.",
    starter: `kaam format(nam) {\n  dikhao "Welcome, " + nam + "!";\n}\nformat("Sanket");`,
    expectedOutput: `Welcome, Sanket!\n`
  },
  {
  level: 11,
  title: "Invoice Total Calculator",
  task: "Calculate the total invoice for two products.",
  hint: "Use two variables and add them.",
  starter: `banao item1 = 350;\nbanao item2 = 125;\ndikhao "Total Invoice: " + (item1 + item2);`,
  expectedOutput: `Total Invoice: 475\n`
},
{
  level: 12,
  title: "User Login Greeting",
  task: "Print a welcome message for a user after login.",
  hint: "Use a variable for username.",
  starter: `banao username = "Sanket";\ndikhao "Welcome back, " + username + "!";`,
  expectedOutput: `Welcome back, Sanket!\n`
},
{
  level: 13,
  title: "Discount Eligibility",
  task: "Check if a purchase amount is eligible for a discount.",
  hint: "Use yadi and comparison.",
  starter: `banao amount = 700;\nyadi amount >= 500 {\n  dikhao "Eligible for discount";\n} nahito {\n  dikhao "Not eligible";\n}`,
  expectedOutput: `Eligible for discount\n`
},
{
  level: 14,
  title: "Temperature Categorizer",
  task: "Display weather category based on temperature value.",
  hint: "Use multiple yadi checks or nested logic.",
  starter: `banao temp = 32;\nyadi temp >= 30 {\n  dikhao "Hot";\n} nahito {\n  dikhao "Cool";\n}`,
  expectedOutput: `Hot\n`
},
{
  level: 15,
  title: "Top Performer Report",
  task: "Print a report for the top scoring student.",
  hint: "Store name and marks in variables.",
  starter: `banao name = "Riya";\nbanao marks = 98;\ndikhao name + " scored " + marks + " marks.";`,
  expectedOutput: `Riya scored 98 marks.\n`
},
{
  level: 16,
  title: "Shopping List Printer",
  task: "Print each item from a shopping list array.",
  hint: "Use jabtak with array indexing.",
  starter: `banao list = ["milk", "bread", "eggs"];\nbanao i;\njabtak i = 0; i < 3; i++ {\n  dikhao list[i];\n}`,
  expectedOutput: `milk\nbread\neggs\n`
},
{
  level: 17,
  title: "Simple Interest Calculator",
  task: "Calculate simple interest using formula: P × R × T / 100.",
  hint: "Use variables for P, R, T.",
  starter: `banao p = 1000;\nbanao r = 5;\nbanao t = 2;\nbanao si = (p * r * t) / 100;\ndikhao "Simple Interest: " + si;`,
  expectedOutput: `Simple Interest: 100\n`
},
{
  level: 18,
  title: "Event Reminder Bot",
  task: "Create a function that reminds about an event.",
  hint: "Use kaam with a parameter.",
  starter: `kaam remind(event) {\n  dikhao "Don't forget: " + event;\n}\nremind("Team Meeting at 4 PM");`,
  expectedOutput: `Don't forget: Team Meeting at 4 PM\n`
},
{
  level: 19,
  title: "Age Verification",
  task: "Check if user is 18 or older for access.",
  hint: "Use yadi with >= operator.",
  starter: `banao age = 19;\nyadi age >= 18 {\n  dikhao "Access granted";\n} nahito {\n  dikhao "Access denied";\n}`,
  expectedOutput: `Access granted\n`
},
{
  level: 20,
  title: "Reverse Task List",
  task: "Print tasks from an array in reverse order.",
  hint: "Start loop from last index.",
  starter: `banao tasks = ["login", "upload", "logout"];\nbanao i;\njabtak i = 2; i >= 0; i-- {\n  dikhao tasks[i];\n}`,
  expectedOutput: `logout\nupload\nlogin\n`
},
{
  level: 21,
  title: "Bill Splitter",
  task: "Split a restaurant bill between two people.",
  hint: "Divide total by 2.",
  starter: `banao bill = 900;\nbanao split = bill / 2;\ndikhao "Each pays: " + split;`,
  expectedOutput: `Each pays: 450\n`
},
{
  level: 22,
  title: "Custom Status Generator",
  task: "Display a user’s current status using a variable.",
  hint: "Use banao and dikhao.",
  starter: `banao status = "Working on project";\ndikhao "Status: " + status;`,
  expectedOutput: `Status: Working on project\n`
},
{
  level: 23,
  title: "Days Left Countdown",
  task: "Print days remaining until a deadline.",
  hint: "Use subtraction and dikhao.",
  starter: `banao today = 18;\nbanao deadline = 25;\nbanao left = deadline - today;\ndikhao "Days left: " + left;`,
  expectedOutput: `Days left: 7\n`
},
{
  level: 24,
  title: "BMI Calculator",
  task: "Calculate BMI using weight and height.",
  hint: "Use weight / (height * height).",
  starter: `banao weight = 60;\nbanao height = 1.75;\nbanao bmi = weight / (height * height);\ndikhao "BMI: " + bmi;`,
  expectedOutput: `BMI: 19.59\n`
},
{
  level: 25,
  title: "Task Reminder Bot",
  task: "Remind user about a task.",
  hint: "Use kaam with a message.",
  starter: `kaam remind(task) {\n  dikhao "Reminder: " + task;\n}\nremind("Pay electricity bill");`,
  expectedOutput: `Reminder: Pay electricity bill\n`
},
{
  level: 26,
  title: "Maximum of Two Numbers",
  task: "Print the greater of two numbers.",
  hint: "Use yadi and comparison.",
  starter: `banao a = 12;\nbanao b = 7;\nyadi a > b {\n  dikhao "Max: " + a;\n} nahito {\n  dikhao "Max: " + b;\n}`,
  expectedOutput: `Max: 12\n`
},
{
  level: 27,
  title: "Shopping Total Tracker",
  task: "Add multiple item prices from an array.",
  hint: "Use loop and sum.",
  starter: `banao prices = [120, 85, 40];\nbanao i;\nbanao total = 0;\njabtak i = 0; i < 3; i++ {\n  total = total + prices[i];\n}\ndikhao "Total bill: " + total;`,
  expectedOutput: `Total bill: 245\n`
},
{
  level: 28,
  title: "Temperature Logger",
  task: "Print average from 3 temperature readings.",
  hint: "Add all, divide by count.",
  starter: `banao t1 = 30;\nbanao t2 = 32;\nbanao t3 = 28;\nbanao avg = (t1 + t2 + t3) / 3;\ndikhao "Average: " + avg;`,
  expectedOutput: `Average: 30\n`
},
{
  level: 29,
  title: "Simple Chat Response",
  task: "Echo what the user typed.",
  hint: "Use a function with a parameter.",
  starter: `kaam echo(msg) {\n  dikhao "You said: " + msg;\n}\necho("Hello there");`,
  expectedOutput: `You said: Hello there\n`
},
{
  level: 30,
  title: "Currency Converter",
  task: "Convert USD to INR using fixed rate.",
  hint: "Multiply by rate.",
  starter: `banao usd = 50;\nbanao inr = usd * 83;\ndikhao "INR: " + inr;`,
  expectedOutput: `INR: 4150\n`
},
{
  level: 31,
  title: "Name Formatter",
  task: "Combine first and last name.",
  hint: "Use string concatenation.",
  starter: `banao first = "Ravi";\nbanao last = "Patil";\ndikhao "Name: " + first + " " + last;`,
  expectedOutput: `Name: Ravi Patil\n`
},
{
  level: 32,
  title: "Marksheet Printer",
  task: "Print subject scores and total.",
  hint: "Use array and loop.",
  starter: `banao scores = [85, 90, 88];\nbanao i;\nbanao sum = 0;\njabtak i = 0; i < 3; i++ {\n  dikhao "Score: " + scores[i];\n  sum = sum + scores[i];\n}\ndikhao "Total: " + sum;`,
  expectedOutput: `Score: 85\nScore: 90\nScore: 88\nTotal: 263\n`
},
{
  level: 33,
  title: "Event Countdown",
  task: "Display number of hours left until an event.",
  hint: "Subtract and show result.",
  starter: `banao now = 12;\nbanao event = 18;\nbanao diff = event - now;\ndikhao diff + " hours left";`,
  expectedOutput: `6 hours left\n`
},
{
  level: 34,
  title: "Emoji Repeater",
  task: "Repeat emoji 5 times in loop.",
  hint: "Use loop and dikhao.",
  starter: `banao i;\njabtak i = 0; i < 5; i++ {\n  dikhao "🙂";\n}`,
  expectedOutput: `🙂\n🙂\n🙂\n🙂\n🙂\n`
},
{
  level: 35,
  title: "Poll Result Analyzer",
  task: "Count 'banaos' votes from array.",
  hint: "Use loop and condition.",
  starter: `banao votes = ["banaos", "No", "banaos", "banaos"];\nbanao i;\nbanao count = 0;\njabtak i = 0; i < 4; i++ {\n  yadi votes[i] == "banaos" {\n    count = count + 1;\n  }\n}\ndikhao "banaos count: " + count;`,
  expectedOutput: `banaos count: 3\n`
},
{
  level: 36,
  title: "Salary Bonus Check",
  task: "Print bonus if salary > threshold.",
  hint: "Use conditionals.",
  starter: `banao salary = 45000;\nyadi salary >= 40000 {\n  dikhao "Bonus Applied";\n} nahito {\n  dikhao "No Bonus";\n}`,
  expectedOutput: `Bonus Applied\n`
},
{
  level: 37,
  title: "Balance Validator",
  task: "Verify if account has sufficient funds.",
  hint: "Compare balance vs withdrawal.",
  starter: `banao balance = 2000;\nbanao withdrawal = 1800;\nyadi balance >= withdrawal {\n  dikhao "Withdrawal Approved";\n} nahito {\n  dikhao "Insufficient Funds";\n}`,
  expectedOutput: `Withdrawal Approved\n`
},
{
  level: 38,
  title: "Water Intake Tracker",
  task: "Sum total liters consumed today.",
  hint: "Use array + loop.",
  starter: `banao intake = [1.5, 1.2, 2.0];\nbanao i;\nbanao total = 0;\njabtak i = 0; i < 3; i++ {\n  total = total + intake[i];\n}\ndikhao "Total liters: " + total;`,
  expectedOutput: `Total liters: 4.7\n`
},
{
  level: 39,
  title: "Quiz Score Feedback",
  task: "Print 'Excellent' if score ≥ 90.",
  hint: "Use condition check.",
  starter: `banao score = 92;\nyadi score >= 90 {\n  dikhao "Excellent";\n} nahito {\n  dikhao "Keep Practicing";\n}`,
  expectedOutput: `Excellent\n`
},
{
  level: 40,
  title: "Motivation Bot",
  task: "Print a motivational quote.",
  hint: "Use function + dikhao.",
  starter: `kaam motivate() {\n  dikhao "Keep pushing forward!";\n}\nmotivate();`,
  expectedOutput: `Keep pushing forward!\n`
},
{
  level: 41,
  title: "Time Until Launch",
  task: "Print how many seconds are left before launch time.",
  hint: "Subtract current time from launch time.",
  starter: `banao current = 50;\nbanao launch = 120;\nbanao remaining = launch - current;\ndikhao "Seconds to launch: " + remaining;`,
  expectedOutput: `Seconds to launch: 70\n`
},
{
  level: 42,
  title: "Item Search",
  task: "Print 'Found' if item exists in array, else 'Not found'.",
  hint: "Use jabtak with condition.",
  starter: `banao bag = ["pen", "pad", "eraser"];\nbanao found = "Not found";\nbanao i;\njabtak i = 0; i < 3; i++ {\n  yadi bag[i] == "pad" {\n    found = "Found";\n  }\n}\ndikhao found;`,
  expectedOutput: `Found\n`
},
{
  level: 43,
  title: "Simple Formatter",
  task: "Print formatted name like: Hello, [name]!",
  hint: "Use string joining.",
  starter: `banao user = "Sanket";\ndikhao "Hello, [" + user + "]!";`,
  expectedOutput: `Hello, [Sanket]!\n`
},
{
  level: 44,
  title: "Total Calories",
  task: "Print total calories from array of food items.",
  hint: "Sum array values.",
  starter: `banao calories = [250, 300, 180];\nbanao total = 0;\nbanao i;\njabtak i = 0; i < 3; i++ {\n  total = total + calories[i];\n}\ndikhao "Total calories: " + total;`,
  expectedOutput: `Total calories: 730\n`
},
{
  level: 45,
  title: "Grade Assignment",
  task: "Print grade based on marks: ≥90: A, ≥75: B, else C.",
  hint: "Use nested yadi.",
  starter: `banao marks = 88;\nyadi marks >= 90 {\n  dikhao "Grade: A";\n} nahito {\n  yadi marks >= 75 {\n    dikhao "Grade: B";\n  } nahito {\n    dikhao "Grade: C";\n  }\n}`,
  expectedOutput: `Grade: B\n`
},
{
  level: 46,
  title: "Reverse Greeting",
  task: "Print reversed message from array.",
  hint: "Loop backwards.",
  starter: `banao words = ["Good", "Morning", "Sanket"];\nbanao i;\njabtak i = 2; i >= 0; i-- {\n  dikhao words[i];\n}`,
  expectedOutput: `Sanket\nMorning\nGood\n`
},
{
  level: 47,
  title: "Bus Capacity Check",
  task: "Print 'Full' if passengers ≥ seats, else 'Available'.",
  hint: "Use yadi.",
  starter: `banao passengers = 45;\nbanao seats = 50;\nyadi passengers >= seats {\n  dikhao "Full";\n} nahito {\n  dikhao "Available";\n}`,
  expectedOutput: `Available\n`
},
{
  level: 48,
  title: "Last Digit Extractor",
  task: "Print last digit of a number.",
  hint: "Use modulo operator.",
  starter: `banao num = 237;\nbanao last = num % 10;\ndikhao "Last digit: " + last;`,
  expectedOutput: `Last digit: 7\n`
},
{
  level: 49,
  title: "Multiply Array",
  task: "Print each item in array multiplied by 2.",
  hint: "Use loop and math.",
  starter: `banao nums = [3, 5, 7];\nbanao i;\njabtak i = 0; i < 3; i++ {\n  dikhao nums[i] * 2;\n}`,
  expectedOutput: `6\n10\n14\n`
},
{
  level: 50,
  title: "Function Repeat",
  task: "Make a function that prints 'Hello' 3 times.",
  hint: "Use loop inside kaam.",
  starter: `kaam hello() {\n  banao i;\n  jabtak i = 0; i < 3; i++ {\n    dikhao "Hello";\n  }\n}\nhello();`,
  expectedOutput: `Hello\nHello\nHello\n`
}
];