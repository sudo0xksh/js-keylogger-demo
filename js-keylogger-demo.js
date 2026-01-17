<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Key Event Demo (LAB)</title>
</head>
<body>

<script>
console.log("=========================================");
console.log("Key Event Demo (LAB)");
console.log("Developed by sudo_0xksh");
console.log("=========================================");
</script>

<h3>Type here (LAB ONLY)</h3>
<input type="text" placeholder="Type something..." />

<script>
document.addEventListener("keydown", function(event){
    console.log("Key pressed:", event.key);
});
</script>

</body>
</html>
