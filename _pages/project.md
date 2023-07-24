---
layout: page
permalink: /project/
title: Project
#description: Materials for courses you taught. Replace this text with your description.
description: The nexIK project in a glance
nav: true

logo_1: larsys.png
logo_2: inesc_id.png
logo_3: fct.png
---

<div class='specialParagraph' markdown='1'>
The nexIK project will propose a **new methodology to quantify the interactions between Water, Energy and Food in IKs**. Commonly known as the Water-Energy-Food Nexus (WEFN), the developed methodology will provide a holistic approach to **assess the impact of IK activity on the consumption of electricity and water**.

To achieve this vision, the project will first seek to understand the **perceptions** of the stakeholders (IK managers and users) about the WEFN, following a user-centered research approach. On a second phase, **electricity** and **water** consumption **sensors** will be deployed in selected IKs for a period up to 12 consecutive monhts. 

The collected data (both qualitative and quantitative) will then be used to explore the possibility of modeling the WEF Nexus following a **data-driven dynamical systems** approach. Such a data-driven methodology will facilitate the WEFN modeling process, which to date is mostly done following heavily manual and complex modeling processes and hence only applied at a macro level.

The existence of photovoltaic **(PV)** generation in the IK (on the roof) and energy **storage** (e.g., electric) will also be considered due to the importance that these systems can have in the WEFN. Furthermore, the project will also seek to assess the possibility of the IKs to participate in **flexibility** services. A **co-simulation** platform will be used to test the global functioning of IKs considering realistic combinations of equipment and appliances.

Finally, the results of this project will be used to promote the participation in national, European and international **academic and industrial projects**, to validate these models as well as the WEFN considering the reality in other countries with different eating habits.



## Tasks

To achieve the project objectives, several research activities will be carried out. Such activities will be developed in the scope of **five main tasks**. T1: User-Centered Research; T2: Resource Monitoring; T3: Data-Driven Nexus Modeling; T4: Demand Side Flexibility and Energy Efficiency; and T5: Abstraction and Scale-up.

- **T1: User-Centered Research:** 
This task will focus on understanding the perceptions of the main IKs stakeholders concerning the WEFN, and energy efficiency/flexibility opportunities to evaluate the role of behavior in successful implementations of sustainable solutions. The User Research approach will be applied tomachive the goals of this task.

- **T2: Resource Monitoring:**
This task includes all the activities related to the deployment and maintenance of the year-long data collection campaign in two IKs that will be recruited basedd on the results from T1. More precisely, electricity (including individual appliances) and water consumption will be monitored.

- **T3: Data-Driven Nexus Modeling:**
This task will focus on developing and evaluating data-driven methods to model the Water-Energy-Food Nexus in the two IKs. This will be done using the qualitative data collected in T1 and the electricity and water consumption measurements from the data collection campaign in T2.

- **T4: Demand Side Flexibility and Energy Efficiency:**
This task includes all the activities related to exploring the potential for increasing the energy efficiency of IKs as well as their ability to provide flexibility to system operators. Likewise, this task will also explore the role of Renewable Energy Systems (RES) and storage devices in IKs.

- **T5: Abstraction and Scale-up:**
This task will focus on leveraging the results from the previous taks to develop abstract models of IKs that can be used to generalize the nexIK result across different types of IKs. Likewise, this tasks also aims at identifying additional funding opportunities.

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

The Associate Laboratory of Robotics and Engineering Systems ([LARSyS](https://larsys.pt)) was founded in 2001 to conduct basic and applied research in engineering technologies relevant to industrial applications and societal challenges.

</div>
</div>

<div class="clearfix" style="margin-bottom:10px">

<div class="float-left" style="width:30%; max-height:10px">
      {% if page.logo_1 %}
        {% responsive_image_block %}
          path: {{ page.logo_2 | prepend: 'assets/img/' }}
          //class: "img-fluid z-depth-1 rounded"
          style: "width:100%; max-height:105px"
          alt: {{ page.profile.image }}
        {% endresponsive_image_block %}
      {% endif %}
</div>
<div class="float-left" style="width:70%; padding-left:10px" markdown="1">

The Instituto de Engenharia de Sistemas e Computadores, Investigação e Desenvolvimento em Lisboa ([INESC-ID](https://inesc-id.pt)), is a non-profit research institution, privately owned by IST and INESC, officially declared of public interest, created as a result of a reorganization of its parent institution INESC.

</div>
</div>

## Funding

<div class="clearfix" markdown="1">

  <div class="float-left" style="width:30%">
        {% if page.logo_1 %}
          {% responsive_image_block %}
            path: {{ page.logo_3 | prepend: 'assets/img/' }}
            //class: "img-fluid z-depth-1 rounded"
            style: "width:100%"
            alt: {{ page.profile.image }}
          {% endresponsive_image_block %}
        {% endif %}
  </div>
  <div class="float-left" style="width:70%; padding-left:10px" markdown="1">

  The nexIK project is funded by the  Portuguese Foundation for Science and Technology ([FCT](https://www.fct.pt/)) under grant (EXPL/CCI-COM/1234/2021), through national funds.

</div>

</div>



