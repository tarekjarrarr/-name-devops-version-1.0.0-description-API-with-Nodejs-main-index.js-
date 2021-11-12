const express = require("express");
const os = require('os');
const app = express();

app.get('/factoriel/:nb', (req,res) => {
  const nb = parseInt(req.params.nb);
  let factorial = 1;
  for (element = 1;element <= nb;element++){
    factorial = factorial * element;
  }
  res.status(200).json(factorial);
})

app.get("/cpu",(req,res)=>{
    const cpus = os.cpus();
    const cpu = cpus[0];
    const total = Object.values(cpu.times).reduce(
        (acc, tv) => acc + tv, 0
    );
    const usage = process.cpuUsage();
    const currentCPUUsage = (usage.user + usage.system) * 1000;
    const perc = currentCPUUsage / total * 100;
    res.status(200).json('CPU Usage (%): ${perc}')
})

app.listen(8080, () => {
  console.log("server is running on 8080");
})