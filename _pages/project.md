---
layout: page
permalink: /project/
title: Project
#description: Materials for courses you taught. Replace this text with your description.
description: The ALAMO project in a glance
nav: true

logo_1: larsys.png
logo_2: inesc_id_logo.png
logo_3: fct_logo.png
logo_mit: mit_logo.png
logo_ufjf: ufjf_logo.png
---

<div class='specialParagraph' markdown='1'>

The main objective of the Accurate federated Learning with uncertainty quantification for DER forecasting Applied to sMart Grids planning and Operation (ALAMO1) project is to d**evelop technologies to facilitate the management of power grids with very high penetration of Distributed Energy Resources (DERs), while at the same time assuring the privacy of the main stakeholders**. In particular, the project will address outstanding research challenges related to developing accurate forecasting algorithms based on **Federated Learning (FL)** and challenges associated with producing sharp and well-calibrated **quantifications of epistemic and aleatoric uncertainty** for such forecasting models.

The developed forecasting and uncertainty models will be **incorporated into operational planning tools for distribution system operators (DSOs)**. Such tools are becoming crucial for DSOs due to increased RES connected to the distribution systems. This project will also consider the **participation of the Transmission System Operators (TSOs)**, that are ofen ignored in the planning and operation of power grids.

## Tasks

The proposed research plan consists of **five tasks**, that will be led by teams at MIT in the USA, and at ITI/LARSyS and INESC-ID in Portugal. T1: **Dataset** Preparation and Grid Modeling (MIT), T2: Development of **Federated Learning Forecasting** Algorithms (MIT), T3: **Uncertainty** Quantification and Scoring (ITI/LARSyS), T4: **Application of FL Forecasts** for Grid Operational Planning, TSO-DSO Coordination, and P2P Trading (INESC-ID), and T5: **Demonstration** in Real-World Testbed (ITI/LARSyS).

[comment]: - **T1: User-Centered Research:** 
[comment]: This task will focus on understanding the perceptions of the main IKs stakeholders concerning the WEFN, and energy efficiency/flexibility opportunities to evaluate the role of behavior in successful implementations of sustainable solutions. The User Research approach will be applied tomachive the goals of this task.

[comment]:- **T2: Resource Monitoring:**
[comment]:This task includes all the activities related to the deployment and maintenance of the year-long data collection campaign in two IKs that will be recruited basedd on the results from T1. More precisely, electricity (including individual appliances) and water consumption will be monitored.

[comment]:- **T3: Data-Driven Nexus Modeling:**
[comment]:This task will focus on developing and evaluating data-driven methods to model the Water-Energy-Food Nexus in the two IKs. This will be done using the qualitative data collected in T1 and the electricity and water consumption measurements from the data collection campaign in T2.

[comment]:- **T4: Demand Side Flexibility and Energy Efficiency:**
[comment]:This task includes all the activities related to exploring the potential for increasing the energy efficiency of IKs as well as their ability to provide flexibility to system operators. Likewise, this task will also explore the role of Renewable Energy Systems (RES) and storage devices in IKs.

[comment]:- **T5: Abstraction and Scale-up:**
[comment]:This task will focus on leveraging the results from the previous taks to develop abstract models of IKs that can be used to generalize the nexIK result across different types of IKs. Likewise, this tasks also aims at identifying additional funding opportunities.

</div>

## Partners

<div class="clearfix" style="margin-bottom:10px">
<div class="float-left" style="width:30%">
    {% if page.logo_1 %}
      {% responsive_image_block %}
        path: {{ page.logo_1 | prepend: 'assets/img/' }}
        //class: "img-fluid z-depth-1 rounded"
        style: "width:100%"
        alt: {{ page.profile.image }}
      {% endresponsive_image_block %}
    {% endif %}
</div>

<div class="float-left" style="width:70%; padding-left:10px" markdown="1">

The Associate Laboratory of Robotics and Engineering Systems ([LARSyS](https://larsys.pt)) was founded in 2001 to conduct basic and applied research in engineering technologies relevant to industrial applications and societal challenges. The
Interactive Technologies Institute ([ITI](https://iti.larsys.pt)) is the LARSyS research unit responsihle for the ALAMO project.

</div>
</div>

<div class="clearfix" style="margin-bottom:10px;">

<div class="float-left" style="width:30%;">
      {% if page.logo_2 %}
        {% responsive_image_block %}
          path: {{ page.logo_2 | prepend: 'assets/img/' }}
          //class: "img-fluid z-depth-1 rounded"
          style: "width:100%;"
          alt: {{ page.profile.image }}
        {% endresponsive_image_block %}
      {% endif %}
</div>

<div class="float-left" style="width:70%; padding-left:10px;" markdown="1">

The Instituto de Engenharia de Sistemas e Computadores, Investigação e Desenvolvimento em Lisboa ([INESC-ID](https://inesc-id.pt)), is a non-profit research institution, privately owned by IST and INESC, officially declared of public interest, created as a result of a reorganization of its parent institution INESC.

</div>
</div>

<div class="clearfix" style="margin-bottom:10px;">

<div class="float-left" style="width:30%;">
      {% if page.logo_mit %}
        {% responsive_image_block %}
          path: {{ page.logo_mit | prepend: 'assets/img/' }}
          //class: "img-fluid z-depth-1 rounded"
          style: "width:100%;"
          alt: {{ page.profile.image }}
        {% endresponsive_image_block %}
      {% endif %}
</div>

<div class="float-left" style="width:70%; padding-left:10px;" markdown="1">

The Massachusetts Institute of Technology ([MIT](https://mit.edu)), founded in 1861, is a global leader in innovation and education, situated in Cambridge, Massachusetts. <!--Renowned for groundbreaking research and a culture of collaboration, it fosters creativity and tackles pressing societal challenges, shaping the future through technology and entrepreneurship.-->
The team that is participating in the ALMO project is part of the Active-Adaptive Control Laboratory ([AAC Lab](http://aaclab.mit.edu/)). <!--The goal of the laboratory is to investigate complex intelligent systems that require adaptation, learning, optimization, and control.-->

</div>
</div>

<div class="clearfix" style="margin-bottom:10px;">

<div class="float-left" style="width:30%;">
      {% if page.logo_ufjf %}
        {% responsive_image_block %}
          path: {{ page.logo_ufjf | prepend: 'assets/img/' }}
          //class: "img-fluid z-depth-1 rounded"
          style: "width:100%;"
          alt: {{ page.profile.image }}
        {% endresponsive_image_block %}
      {% endif %}
</div>

<div class="float-left" style="width:70%; padding-left:10px;" markdown="1">

The Universidade Federal de Juiz de Fora (UFJF) in Juiz de Fora, Minas Gerais, Brazil, is renowned for academic excellence and community engagement since its establishment in 1960. <!--Offering diverse undergraduate and graduate programs, UFJF fosters innovation and social responsibility, making a significant impact locally and globally through collaborative research and education.-->

</div>
</div>

## Funding

<div class="clearfix" markdown="1">
  <div class="float-left" style="width:30%">
        {% if page.logo_3 %}
          {% responsive_image_block %}
            path: {{ page.logo_3 | prepend: 'assets/img/' }}
            //class: "img-fluid z-depth-1 rounded"
            style: "width:100%"
            alt: {{ page.profile.image }}
          {% endresponsive_image_block %}
        {% endif %}
  </div>
  <div class="float-left" style="width:70%; padding-left:10px" markdown="1">

  The ALAMO project is funded by the  Portuguese Foundation for Science and Technology ([FCT](https://www.fct.pt/)) in the scope of the [MIT-Portugal Programa](https://mitportugal.org/), under grant (2022.15771.MIT), through national funds.

</div>

</div>



