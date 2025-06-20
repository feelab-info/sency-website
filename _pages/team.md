---
layout: page
permalink: /team/
title: Team
description: The research team

nav: true
---

<!--- #### Current Members --->

{% for person in site.data.members %}

<!-- The paddingtop and margin-top edits allow anchors to link properly. -->
<div class="clearfix" id = "{{person.name | replace: ' ', '-'}}" style="padding-top: 60px; margin-top: -60px;">
    <img style="border:1px solid; float: left; width: 33%; margin-right: 20px;" src="{{ person.image | prepend: '/assets/img/' | prepend: site.baseurl | prepend: site.url }}" alt="photo of {{person.name}}">
    <div>
        <h4>{{person.name}}{% if person.degrees %}, {{person.degrees}} {% endif %}</h4> 
        {{person.position}}
        <i class="fa fa-flag"></i> <em>{{person.country}}</em> <br>
        <!--<i class="fa fa-envelope"></i> <em>{{person.partner}}</em> <br>-->
        {% if person.email %}
          <i class="fa fa-envelope"></i> <em>{{person.email}}</em> <br>
        {% endif %}
        {% if person.twitter %}
          <i class="fab fa-twitter"></i> <a href= "http://twitter.com/{{person.twitter}}" target="_blank"> @{{person.twitter}} </a> <br>
        {% endif %}
        {% if person.website %}
          <i class="fa fa-globe"></i> <a href= "{{person.website}}" target="_blank">{{person.website}}</a> <br>
        {% endif %}
        {% if person.github %}
          <i class="fab fa-github"></i> <a href= "https://github.com/{{person.github}}" target="_blank"> {{person.github}} </a> <br>
        {% endif %}
        {% if person.scholar %}
          <i class="ai ai-google-scholar"></i> <a href= "http://scholar.google.com/citations?user={{person.scholar}}" target="_blank"> Scholar Citations </a> <br>
        {% endif %}
        {% if person.orcid %}
          <i class="ai ai-orcid"></i> <a href="http://{{person.orcid}}" target="_blank"> {{person.orcid}}</a> <br>
        {% endif %}

    </div>
    <div class="col-sm-12" style="padding:0">
        <p class="text-justify">{{person.description | markdownify}}</p>
    </div>
</div>
<hr>
{% endfor %}

<!-- #### Former Members -->


{% for person in site.data.former_members %}

<!-- The paddingtop and margin-top edits allow anchors to link properly. -->
<div class="clearfix" id = "{{person.name | replace: ' ', '-'}}" style="padding-top: 60px; margin-top: -60px;">
    <img style="border:1px solid; float: left; width: 33%; margin-right: 20px;" src="{{ person.image | prepend: '/assets/img/' | prepend: site.baseurl | prepend: site.url }}" alt="photo of {{person.name}}">
    <div>
        <h4>{{person.name}}{% if person.degrees %}, {{person.degrees}} {% endif %}</h4> 
        {{person.position}} <br>
        <i class="fa fa-envelope"></i> <em>{{person.email}}</em> <br>
        {% if person.twitter %}
          <i class="fab fa-twitter"></i> <a href= "http://twitter.com/{{person.twitter}}" target="_blank"> @{{person.twitter}} </a> <br>
        {% endif %}
        {% if person.website %}
          <i class="fa fa-globe"></i> <a href= "{{person.website}}" target="_blank">{{person.website}}</a> <br>
        {% endif %}
        {% if person.github %}
          <i class="fab fa-github"></i> <a href= "https://github.com/{{person.github}}" target="_blank"> {{person.github}} </a> <br>
        {% endif %}
        {% if person.scholar %}
          <i class="ai ai-google-scholar"></i> <a href= "http://scholar.google.com/citations?user={{person.scholar}}" target="_blank"> Scholar Citations </a> <br>
        {% endif %}
        {% if person.orcid %}
          <i class="ai ai-orcid"></i> <a href="http://{{person.orcid}}" target="_blank"> {{person.orcid}}</a> <br>
        {% endif %}

    </div>
    <div class="col-sm-12" style="padding:0">
        <p class="text-justify">{{person.description | markdownify}}</p>
    </div>
</div>
<hr>
{% endfor %}



<!--## students-->
{% for person in site.data.students %}

<!-- The paddingtop and margin-top edits allow anchors to link properly. -->
<div id = "{{person.name | replace: ' ', '-'}}" class="row" style="padding-top: 60px; margin-top: -60px; padding-bottom: 20px; margin-left:0">
  <i>{{person.name}}{% if person.degrees %}, {{person.degrees}} {% endif %}</i> <br> 
  <i class="fa fa-envelope"></i> <em>{{person.email}}</em> <br>
  {% if person.description %}
  <div style="margin-left: 2.5em; padding-top: 8px; padding-bottom: 5px; ">{{person.description}}</div>
  {% else %}
  {% for paper in site.data.publications %}
  {% if paper.authors contains student.pubmed_name %}
  <div style="margin-left: 2.5em; padding-top: 8px; padding-bottom: 5px; ">{{paper.authors | remove: '**'}} <a href="/papers/index.html#{{paper.title}}">{{paper.title}}</a> {{paper.details}}</div>
  {% endif %}
  {% endfor %}
  {% endif %}
</div>

{% endfor %}
<!------->

<!--## alumni-->
{% for alum in site.data.alumni %}

<!-- The paddingtop and margin-top edits allow anchors to link properly. -->
<div id = "{{alum.name | replace: ' ', '-'}}" class="row" style="padding-top: 60px; margin-top: -60px; padding-bottom: 20px;">
  <strong>{{alum.name}}{% if alum.degrees %}, {{alum.degrees}} {% endif %}</strong> <br>
  <i>previously:</i> {{alum.previously}} <br>
  <i>now:</i> {{alum.now}}<br>
    {% if alum.twitter %}
      <i class="fab fa-twitter"></i> <a href= "http://twitter.com/{{alum.twitter}}" target="_blank"> @{{alum.twitter}} </a> <br>
    {% endif %}
    {% if alum.website %} <i class="fa fa-globe"></i> <a href= "{{alum.website}}" target="_blank">{{alum.website}}</a>  {% endif %}
    {% for paper in site.data.publications %}
  {% if paper.authors contains alum.pubmed_name %}
  <div style="margin-left: 2.5em; padding-top: 8px; padding-bottom: 5px; ">{{paper.authors | remove: '**'}} <a href="/papers/index.html#{{paper.title | replace: ' ', '-' |  remove: '.'}}">{{paper.title}}</a> {{paper.details}}</div>
  {% endif %}
  {% endfor %}
</div>
{% endfor %}

<!------->

<!--## collaborators-->

{% for collaborator in site.data.collaborators %}
- <strong>{{collaborator.name}}{% if collaborator.degrees %}, {{collaborator.degrees}} {% endif %}</strong>  
  {{collaborator.position}}  
  {% if collaborator.website %} <i class="fa fa-globe"></i> <a href= "{{collaborator.website}}" target="_blank">{{collaborator.website}}</a>  {% endif %}
{% endfor %}
