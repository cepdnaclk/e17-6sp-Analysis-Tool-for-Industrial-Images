---
layout: home
permalink: index.html

# Please update this with your repository name and title
repository-name: e17-co328-Analysis-Tool-for-Industrial-Images
title: Analysis Tool for Industrial Images
---

[comment]: # "This is the standard layout for the project, but you can clean this and use your own template"

# Analysis Tool for Industrial Images

---




## Team
-  E/17/154, KARUNANAYAKE A.I, [e17154@eng.pdn.ac.lk](mailto:e17154@eng.pdn.ac.lk)
-  E/17/072, DISSANAYAKE D.M.D.R, [e17072@eng.pdn.ac.lk](mailto:e17072@eng.pdn.ac.lk)
-  E/17/380, WEERASOORIYA S.S, [e17380@eng.pdn.ac.lk](mailto:e17380@eng.pdn.ac.lk)

## Table of Contents
1. [Problem Overview](#problem-overview)
2. [Existing System](#existing-system)
3. [Proposed System](#proposed-system)
4. [Links](#links)

---

## Problem Overview

 The injection molding manufacturing process is used for producing parts by injecting molten material into a mold.In our specific use case, we focus on plastic injection molding.One of the common problems in this process is when plastic residue gets stuck or left behind in the mold.Thus leading to damages to the mold , defects in products and ultimately resulting in unwanted business costs.

## Current Implementation

The above issue is mainly handled by checking the molds manually on each iteration. This has become a heavy burden as it costs time and money to supply this labor at a high frequency . These machines are highly capable of working on full automatic but this issue has caused a significant overhead in the manufacturing process.As a solution, a device was built to capture images of the mold in near IR frequency to check for stuck particles. Currently, this is being implemented to mitigate this issue.The implementation is purely run to check for defects using an image processing algorithm with a given set of parameters.The problem here is that although this implementation has proven to be a better alternative there is a limitation at which how effective or how true the results from this device is Currently, the built device only gives out a binary output as positive a negative. Since there is a limitation for the flexibility of the used algorithm is these results do not always turn out to be true. Hence our focus is to elevate the performance of the implemented device to produce better results.

## Proposed System

As a solution, we aim to provide a tool to provide statistical data representing to be used to show the effectiveness of the algorithm.Here we would change parameters such as threshold values for identifying particle sizes. For this we will be using the images captured from the device and manually labelled image sets. As a second part of the implementation, a dashboard to centrally view all the statistical data pertaining to different machines will be created. So that a better management of the facility can be maintained. With the proposed solution we will be able to improve the performance of the current implementation and as a result, improve the overall benefits. We will be able to have better confirmation of the errors / defects with higher assurance. We wil be able to minimize the cost of labour as the frequency of mold checks/ cleaning gets minimized and increase the overall output of the machines. The minimal maintenance cost wil be significantly lower than the high price to be paid for damaged molds. With the added improvement s to the device, the whole operation will ultimately be able to work on its maximum rated speed without any interference


## Links

- [Project Repository](https://github.com/cepdnaclk/e17-co328-Analysis-Tool-for-Industrial-Images)
- [Project Page](https://cepdnaclk.github.io/e17-Analysis-Tool-for-Industrial-Images)
- [Department of Computer Engineering](http://www.ce.pdn.ac.lk/)
- [University of Peradeniya](https://eng.pdn.ac.lk/)


[//]: # (Please refer this to learn more about Markdown syntax)
[//]: # (https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
