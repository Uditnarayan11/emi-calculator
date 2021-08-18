<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EMI Calculator Task</title>
    <!--Bootstrap-->
    <link rel="stylesheet" href="../node_modules/bootstrap/dist/css/bootstrap.css">
    <link rel="stylesheet" href="../node_modules/bootstrap-icons/font/bootstrap-icons.css">
    <style>
        hr{
            padding: 0px;
            margin: 0px;
        }
    </style>
    <script>
        function LoadtAmt() {
            document.getElementById("rangeAmt").value = document.getElementById("txtAmt").value;
        }
        function LoadtMonth() {
            document.getElementById("rangeMonth").value = document.getElementById("txtMonth").value;
        }
        function LoadtInt() {
            document.getElementById("rangeInt").value = document.getElementById("txtInt").value;
        }
        function LoadAmt() {
            document.getElementById("txtAmt").value = document.getElementById("rangeAmt").value;
        }
        function LoadMonth() {
            document.getElementById("txtMonth").value = document.getElementById("rangeMonth").value;
        }
        function LoadInt() {
            document.getElementById("txtInt").value = document.getElementById("rangeInt").value;
        }
        function Calculate() {
            var txtAmt = document.getElementById("txtAmt").value;
            var txtMonth = document.getElementById("txtMonth").value;
            var txtInt = document.getElementById("txtInt").value/1200;
            var result = document.getElementById("result");
            var txtResult = txtAmt * txtInt / (1 - (Math.pow(1 / (1 + txtInt), txtMonth)));
            result.innerHTML =
                `
            <p class="text-success text-end fw-bold">Your Monthly EMI will be : &#8377; ${Math.round(txtResult)}</p>
            `;
        }
    </script>
</head>

<body class="container-fluid">
    <div class="d-flex justify-content-center align-items-center">
        <div class="border border-primary border-2 rounded m-3 col-8 offset-2">
            <h2 class="text-center bg-primary text-white p-2">EMI Calculator</h2>
            <div class="row p-3">
                <div class="col-md-4">
                    <div>
                        <p>Amount you need<br>(<span>&#8377;</span>50,000 - <span>&#8377;</span>4,00,000)</p>
                        <div>
                            <div class="input-group">
                                <span class="btn btn-primary">&#8377;</span>
                                <input type="text" id="txtAmt" onkeyup="LoadtAmt()" value="50000" min="50000"
                                    max="400000" class="form-control">
                            </div>
                            <input type="range" id="rangeAmt" onchange="LoadAmt()" value="50000" min="50000"
                                max="400000" class="form-range">
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <p>for<br>(3 - 24 Months)</p>
                    <div>
                        <div class="input-group">
                            <input type="text" id="txtMonth" onkeyup="LoadtMonth()" value="3" min="3" max="24"
                                class="form-control">
                            <span class="btn btn-primary">Months</span>
                        </div>
                        <input type="range" id="rangeMonth" value="3" onchange="LoadMonth()" min="3" max="24"
                            class="form-range">
                    </div>
                </div>
                <div class="col-md-4">
                    <p>Interest rate<br>(5 - 20%)</p>
                    <div>
                        <div class="input-group">
                            <input type="text" id="txtInt" value="5" onkeyup="LoadtInt()" class="form-control">
                            <span class="btn btn-primary">%</span>
                        </div>
                        <input type="range" id="rangeInt" value="5" onchange="LoadInt()" min="5" max="20"
                            class="form-range">
                    </div>
                </div>
            </div>
            <hr>
            <div class="row p-3">
                <div class="col-md-6">
                        <button class="btn btn-primary" onclick="Calculate()"><span class="bi bi-calculator-fill"></span>
                            Calculate</button>
                </div>
                <div class="col-md-6">
                    <div id="result">
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>

</html>
