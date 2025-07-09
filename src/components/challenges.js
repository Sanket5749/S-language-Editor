export const challenges = [
  {
    level: 1,
    title: "Print Hello",
    task: "Print 'Hello, World!'",
    hint: "Use bol with a string.",
    starter: `bol "Hello, World!";`,
    expectedOutput: `Hello, World!\n`
  },
  {
    level: 2,
    title: "Greeting with Name",
    task: "Declare a variable and print 'Welcome, <name>'.",
    hint: "Use ye and bol with concatenation.",
    starter: `ye name = "Sanket";\nbol "Welcome, " + name;`,
    expectedOutput: `Welcome, Sanket\n`
  },
  {
    level: 3,
    title: "Sum Two Numbers",
    task: "Declare two numbers and print their sum.",
    hint: "Use ye a, b and bol a + b.",
    starter: `ye a = 5;\nye b = 7;\nbol a + b;`,
    expectedOutput: `12\n`
  },
  {
    level: 4,
    title: "Positive or Negative",
    task: "Check whether a number is positive or negative.",
    hint: "Use agar and warna with comparison.",
    starter: `ye num = -3;\nagar num > 0 {\n  bol "Positive";\n} warna {\n  bol "Negative";\n}`,
    expectedOutput: `Negative\n`
  },
  {
    level: 5,
    title: "Loop 1 to 10",
    task: "Print numbers from 1 to 10.",
    hint: "Use chakkar with bol inside.",
    starter: `ye i;\nchakkar i = 1; i <= 10; i++ {\n  bol i;\n}`,
    expectedOutput: `1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n`
  },
  {
    level: 6,
    title: "Even or Odd",
    task: "For numbers 1 to 10, print whether they're even or odd.",
    hint: "Use i % 2 == 0 inside agar.",
    starter: `ye i;\nchakkar i = 1; i <= 10; i++ {\n  bol i;\n  agar i % 2 == 0 {\n    bol "Even";\n  } warna {\n    bol "Odd";\n  }\n}`,
    expectedOutput: `1\nOdd\n2\nEven\n3\nOdd\n4\nEven\n5\nOdd\n6\nEven\n7\nOdd\n8\nEven\n9\nOdd\n10\nEven\n`
  },
  {
    level: 7,
    title: "Print Fruits",
    task: "Loop through an array of fruits and print each.",
    hint: "Use chakkar with fruits[i].",
    starter: `ye fruits = ["apple", "banana", "cherry"];\nye i;\nchakkar i = 0; i < 3; i++ {\n  bol fruits[i];\n}`,
    expectedOutput: `apple\nbanana\ncherry\n`
  },
  {
    level: 8,
    title: "Reverse Array",
    task: "Print elements of an array in reverse order.",
    hint: "Start loop from last index to 0.",
    starter: `ye fruits = ["apple", "banana", "cherry"];\nye i;\nchakkar i = 2; i >= 0; i-- {\n  bol fruits[i];\n}`,
    expectedOutput: `cherry\nbanana\napple\n`
  },
  {
    level: 9,
    title: "Grade Checker",
    task: "Write a function grade(marks) that prints 'Pass' if marks ≥ 40, else 'Fail'.",
    hint: "Use agar inside kaam.",
    starter: `kaam grade(marks) {\n  agar marks >= 40 {\n    bol "Pass";\n  } warna {\n    bol "Fail";\n  }\n}\ngrade(55);`,
    expectedOutput: `Pass\n`
  },
  {
    level: 10,
    title: "Formatted Greeting",
    task: "Create format(name) that prints 'Welcome, <name>!'",
    hint: "Use kaam and string joining.",
    starter: `kaam format(nam) {\n  bol "Welcome, " + nam + "!";\n}\nformat("Sanket");`,
    expectedOutput: `Welcome, Sanket!\n`
  },
  {
  level: 11,
  title: "Invoice Total Calculator",
  task: "Calculate the total invoice for two products.",
  hint: "Use two variables and add them.",
  starter: `ye item1 = 350;\nye item2 = 125;\nbol "Total Invoice: " + (item1 + item2);`,
  expectedOutput: `Total Invoice: 475\n`
},
{
  level: 12,
  title: "User Login Greeting",
  task: "Print a welcome message for a user after login.",
  hint: "Use a variable for username.",
  starter: `ye username = "Sanket";\nbol "Welcome back, " + username + "!";`,
  expectedOutput: `Welcome back, Sanket!\n`
},
{
  level: 13,
  title: "Discount Eligibility",
  task: "Check if a purchase amount is eligible for a discount.",
  hint: "Use agar and comparison.",
  starter: `ye amount = 700;\nagar amount >= 500 {\n  bol "Eligible for discount";\n} warna {\n  bol "Not eligible";\n}`,
  expectedOutput: `Eligible for discount\n`
},
{
  level: 14,
  title: "Temperature Categorizer",
  task: "Display weather category based on temperature value.",
  hint: "Use multiple agar checks or nested logic.",
  starter: `ye temp = 32;\nagar temp >= 30 {\n  bol "Hot";\n} warna {\n  bol "Cool";\n}`,
  expectedOutput: `Hot\n`
},
{
  level: 15,
  title: "Top Performer Report",
  task: "Print a report for the top scoring student.",
  hint: "Store name and marks in variables.",
  starter: `ye name = "Riya";\nye marks = 98;\nbol name + " scored " + marks + " marks.";`,
  expectedOutput: `Riya scored 98 marks.\n`
},
{
  level: 16,
  title: "Shopping List Printer",
  task: "Print each item from a shopping list array.",
  hint: "Use chakkar with array indexing.",
  starter: `ye list = ["milk", "bread", "eggs"];\nye i;\nchakkar i = 0; i < 3; i++ {\n  bol list[i];\n}`,
  expectedOutput: `milk\nbread\neggs\n`
},
{
  level: 17,
  title: "Simple Interest Calculator",
  task: "Calculate simple interest using formula: P × R × T / 100.",
  hint: "Use variables for P, R, T.",
  starter: `ye p = 1000;\nye r = 5;\nye t = 2;\nye si = (p * r * t) / 100;\nbol "Simple Interest: " + si;`,
  expectedOutput: `Simple Interest: 100\n`
},
{
  level: 18,
  title: "Event Reminder Bot",
  task: "Create a function that reminds about an event.",
  hint: "Use kaam with a parameter.",
  starter: `kaam remind(event) {\n  bol "Don't forget: " + event;\n}\nremind("Team Meeting at 4 PM");`,
  expectedOutput: `Don't forget: Team Meeting at 4 PM\n`
},
{
  level: 19,
  title: "Age Verification",
  task: "Check if user is 18 or older for access.",
  hint: "Use agar with >= operator.",
  starter: `ye age = 19;\nagar age >= 18 {\n  bol "Access granted";\n} warna {\n  bol "Access denied";\n}`,
  expectedOutput: `Access granted\n`
},
{
  level: 20,
  title: "Reverse Task List",
  task: "Print tasks from an array in reverse order.",
  hint: "Start loop from last index.",
  starter: `ye tasks = ["login", "upload", "logout"];\nye i;\nchakkar i = 2; i >= 0; i-- {\n  bol tasks[i];\n}`,
  expectedOutput: `logout\nupload\nlogin\n`
},
{
  level: 21,
  title: "Bill Splitter",
  task: "Split a restaurant bill between two people.",
  hint: "Divide total by 2.",
  starter: `ye bill = 900;\nye split = bill / 2;\nbol "Each pays: " + split;`,
  expectedOutput: `Each pays: 450\n`
},
{
  level: 22,
  title: "Custom Status Generator",
  task: "Display a user’s current status using a variable.",
  hint: "Use ye and bol.",
  starter: `ye status = "Working on project";\nbol "Status: " + status;`,
  expectedOutput: `Status: Working on project\n`
},
{
  level: 23,
  title: "Days Left Countdown",
  task: "Print days remaining until a deadline.",
  hint: "Use subtraction and bol.",
  starter: `ye today = 18;\nye deadline = 25;\nye left = deadline - today;\nbol "Days left: " + left;`,
  expectedOutput: `Days left: 7\n`
},
{
  level: 24,
  title: "BMI Calculator",
  task: "Calculate BMI using weight and height.",
  hint: "Use weight / (height * height).",
  starter: `ye weight = 60;\nye height = 1.75;\nye bmi = weight / (height * height);\nbol "BMI: " + bmi;`,
  expectedOutput: `BMI: 19.59\n`
},
{
  level: 25,
  title: "Task Reminder Bot",
  task: "Remind user about a task.",
  hint: "Use kaam with a message.",
  starter: `kaam remind(task) {\n  bol "Reminder: " + task;\n}\nremind("Pay electricity bill");`,
  expectedOutput: `Reminder: Pay electricity bill\n`
},
{
  level: 26,
  title: "Maximum of Two Numbers",
  task: "Print the greater of two numbers.",
  hint: "Use agar and comparison.",
  starter: `ye a = 12;\nye b = 7;\nagar a > b {\n  bol "Max: " + a;\n} warna {\n  bol "Max: " + b;\n}`,
  expectedOutput: `Max: 12\n`
},
{
  level: 27,
  title: "Shopping Total Tracker",
  task: "Add multiple item prices from an array.",
  hint: "Use loop and sum.",
  starter: `ye prices = [120, 85, 40];\nye i;\nye total = 0;\nchakkar i = 0; i < 3; i++ {\n  total = total + prices[i];\n}\nbol "Total bill: " + total;`,
  expectedOutput: `Total bill: 245\n`
},
{
  level: 28,
  title: "Temperature Logger",
  task: "Print average from 3 temperature readings.",
  hint: "Add all, divide by count.",
  starter: `ye t1 = 30;\nye t2 = 32;\nye t3 = 28;\nye avg = (t1 + t2 + t3) / 3;\nbol "Average: " + avg;`,
  expectedOutput: `Average: 30\n`
},
{
  level: 29,
  title: "Simple Chat Response",
  task: "Echo what the user typed.",
  hint: "Use a function with a parameter.",
  starter: `kaam echo(msg) {\n  bol "You said: " + msg;\n}\necho("Hello there");`,
  expectedOutput: `You said: Hello there\n`
},
{
  level: 30,
  title: "Currency Converter",
  task: "Convert USD to INR using fixed rate.",
  hint: "Multiply by rate.",
  starter: `ye usd = 50;\nye inr = usd * 83;\nbol "INR: " + inr;`,
  expectedOutput: `INR: 4150\n`
},
{
  level: 31,
  title: "Name Formatter",
  task: "Combine first and last name.",
  hint: "Use string concatenation.",
  starter: `ye first = "Ravi";\nye last = "Patil";\nbol "Name: " + first + " " + last;`,
  expectedOutput: `Name: Ravi Patil\n`
},
{
  level: 32,
  title: "Marksheet Printer",
  task: "Print subject scores and total.",
  hint: "Use array and loop.",
  starter: `ye scores = [85, 90, 88];\nye i;\nye sum = 0;\nchakkar i = 0; i < 3; i++ {\n  bol "Score: " + scores[i];\n  sum = sum + scores[i];\n}\nbol "Total: " + sum;`,
  expectedOutput: `Score: 85\nScore: 90\nScore: 88\nTotal: 263\n`
},
{
  level: 33,
  title: "Event Countdown",
  task: "Display number of hours left until an event.",
  hint: "Subtract and show result.",
  starter: `ye now = 12;\nye event = 18;\nye diff = event - now;\nbol diff + " hours left";`,
  expectedOutput: `6 hours left\n`
},
{
  level: 34,
  title: "Emoji Repeater",
  task: "Repeat emoji 5 times in loop.",
  hint: "Use loop and bol.",
  starter: `ye i;\nchakkar i = 0; i < 5; i++ {\n  bol "🙂";\n}`,
  expectedOutput: `🙂\n🙂\n🙂\n🙂\n🙂\n`
},
{
  level: 35,
  title: "Poll Result Analyzer",
  task: "Count 'Yes' votes from array.",
  hint: "Use loop and condition.",
  starter: `ye votes = ["Yes", "No", "Yes", "Yes"];\nye i;\nye count = 0;\nchakkar i = 0; i < 4; i++ {\n  agar votes[i] == "Yes" {\n    count = count + 1;\n  }\n}\nbol "Yes count: " + count;`,
  expectedOutput: `Yes count: 3\n`
},
{
  level: 36,
  title: "Salary Bonus Check",
  task: "Print bonus if salary > threshold.",
  hint: "Use conditionals.",
  starter: `ye salary = 45000;\nagar salary >= 40000 {\n  bol "Bonus Applied";\n} warna {\n  bol "No Bonus";\n}`,
  expectedOutput: `Bonus Applied\n`
},
{
  level: 37,
  title: "Balance Validator",
  task: "Verify if account has sufficient funds.",
  hint: "Compare balance vs withdrawal.",
  starter: `ye balance = 2000;\nye withdrawal = 1800;\nagar balance >= withdrawal {\n  bol "Withdrawal Approved";\n} warna {\n  bol "Insufficient Funds";\n}`,
  expectedOutput: `Withdrawal Approved\n`
},
{
  level: 38,
  title: "Water Intake Tracker",
  task: "Sum total liters consumed today.",
  hint: "Use array + loop.",
  starter: `ye intake = [1.5, 1.2, 2.0];\nye i;\nye total = 0;\nchakkar i = 0; i < 3; i++ {\n  total = total + intake[i];\n}\nbol "Total liters: " + total;`,
  expectedOutput: `Total liters: 4.7\n`
},
{
  level: 39,
  title: "Quiz Score Feedback",
  task: "Print 'Excellent' if score ≥ 90.",
  hint: "Use condition check.",
  starter: `ye score = 92;\nagar score >= 90 {\n  bol "Excellent";\n} warna {\n  bol "Keep Practicing";\n}`,
  expectedOutput: `Excellent\n`
},
{
  level: 40,
  title: "Motivation Bot",
  task: "Print a motivational quote.",
  hint: "Use function + bol.",
  starter: `kaam motivate() {\n  bol "Keep pushing forward!";\n}\nmotivate();`,
  expectedOutput: `Keep pushing forward!\n`
},
{
  level: 41,
  title: "Time Until Launch",
  task: "Print how many seconds are left before launch time.",
  hint: "Subtract current time from launch time.",
  starter: `ye current = 50;\nye launch = 120;\nye remaining = launch - current;\nbol "Seconds to launch: " + remaining;`,
  expectedOutput: `Seconds to launch: 70\n`
},
{
  level: 42,
  title: "Item Search",
  task: "Print 'Found' if item exists in array, else 'Not found'.",
  hint: "Use chakkar with condition.",
  starter: `ye bag = ["pen", "pad", "eraser"];\nye found = "Not found";\nye i;\nchakkar i = 0; i < 3; i++ {\n  agar bag[i] == "pad" {\n    found = "Found";\n  }\n}\nbol found;`,
  expectedOutput: `Found\n`
},
{
  level: 43,
  title: "Simple Formatter",
  task: "Print formatted name like: Hello, [name]!",
  hint: "Use string joining.",
  starter: `ye user = "Sanket";\nbol "Hello, [" + user + "]!";`,
  expectedOutput: `Hello, [Sanket]!\n`
},
{
  level: 44,
  title: "Total Calories",
  task: "Print total calories from array of food items.",
  hint: "Sum array values.",
  starter: `ye calories = [250, 300, 180];\nye total = 0;\nye i;\nchakkar i = 0; i < 3; i++ {\n  total = total + calories[i];\n}\nbol "Total calories: " + total;`,
  expectedOutput: `Total calories: 730\n`
},
{
  level: 45,
  title: "Grade Assignment",
  task: "Print grade based on marks: ≥90: A, ≥75: B, else C.",
  hint: "Use nested agar.",
  starter: `ye marks = 88;\nagar marks >= 90 {\n  bol "Grade: A";\n} warna {\n  agar marks >= 75 {\n    bol "Grade: B";\n  } warna {\n    bol "Grade: C";\n  }\n}`,
  expectedOutput: `Grade: B\n`
},
{
  level: 46,
  title: "Reverse Greeting",
  task: "Print reversed message from array.",
  hint: "Loop backwards.",
  starter: `ye words = ["Good", "Morning", "Sanket"];\nye i;\nchakkar i = 2; i >= 0; i-- {\n  bol words[i];\n}`,
  expectedOutput: `Sanket\nMorning\nGood\n`
},
{
  level: 47,
  title: "Bus Capacity Check",
  task: "Print 'Full' if passengers ≥ seats, else 'Available'.",
  hint: "Use agar.",
  starter: `ye passengers = 45;\nye seats = 50;\nagar passengers >= seats {\n  bol "Full";\n} warna {\n  bol "Available";\n}`,
  expectedOutput: `Available\n`
},
{
  level: 48,
  title: "Last Digit Extractor",
  task: "Print last digit of a number.",
  hint: "Use modulo operator.",
  starter: `ye num = 237;\nye last = num % 10;\nbol "Last digit: " + last;`,
  expectedOutput: `Last digit: 7\n`
},
{
  level: 49,
  title: "Multiply Array",
  task: "Print each item in array multiplied by 2.",
  hint: "Use loop and math.",
  starter: `ye nums = [3, 5, 7];\nye i;\nchakkar i = 0; i < 3; i++ {\n  bol nums[i] * 2;\n}`,
  expectedOutput: `6\n10\n14\n`
},
{
  level: 50,
  title: "Function Repeat",
  task: "Make a function that prints 'Hello' 3 times.",
  hint: "Use loop inside kaam.",
  starter: `kaam hello() {\n  ye i;\n  chakkar i = 0; i < 3; i++ {\n    bol "Hello";\n  }\n}\nhello();`,
  expectedOutput: `Hello\nHello\nHello\n`
}
];