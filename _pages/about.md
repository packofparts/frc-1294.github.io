---
layout: basic
title: About
permalink: /about/
hero-image: /assets/img/prototype-powercube.jpg
stylesheets:
    - /assets/css/about.css
---

<div class="centered-content">
    <img alt="Top Gun Logo" src="/assets/img/logo-invert.svg" style="width:300px;">
    <img alt="FIRST Robotics Competition Logo" src="/assets/img/frc-logo-white.png" style="height: 210px;">
</div>

We are Top Gun, the robotics team at [Eastlake High School](https://ehs.lwsd.org). Each year we compete in the [_FIRST_ Robotics Competition](https://firstinspires.org/frc), a competition organized by the international nonprofit [_FIRST_](https://firstinspires.org) to engage kids K-12 with interesting robotics competitions that teach them useful skills in fields such as STEM, engineering, and business.

Each year for the competition, we build an up to 120 pound robot to play a game designed by _FIRST_ revealed at the start of the season in January. From that point we have six weeks to plan, build, program, and complete our robot design. We then compete with other teams from around the state, country, and world in various competitions, with the chance to qualify for the world championships.

Our team teaches students a variety of skills: from building the robot, to programming, to business and fundraising, to art and merchandise design, to writing copy text and working on the team website. Students can choose to specialize in a specific discipline, such as writing code, machining parts, or raising funds. The team is student run, so in addition to building robots students make decisions on running the team, take leadership positions, lead their own groups of students in completing tasks, and presenting to businesses and other community members.

<div class="centered-content banners">
    {% for award in site.data.awards %}
    
        {% if award.type == "banner" %}
           <div class="banner">
               <img alt="" src="/assets/img/first-icon.png">
               <strong>{{ award.award }}</strong>
               {{ award.year }} {{ award.event }}
               {% if award.medal %}<div class="medal medal-{{ award.medal }}" title="Medal">{% case award.medal %}{% when "silver" %}2{% when "gold" %}1{% endcase %}</div>{% endif %}
           </div>
    
        {% else %}
            <div class="award-inline award-{{ award.type }}" {% if award.type == "plaque" and award.year >= 2014 %}style="background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.6)),url(/assets/img/awards/plaque/{{ award.year }}.png);"{% endif %}>
                {% if award.type == "trophy" or award.type == "apex" %}
                    <img alt="" src="/assets/img/awards/{{ award.type }}.png">
                {% endif %}
                <strong>{{ award.award }}</strong>
                <p>{{ award.year }} {{ award.event }}</p>
               {% if award.medal %}<div class="medal medal-{{ award.medal }}" title="Medal">{% case award.medal %}{% when "silver" %}2{% when "gold" %}1{% endcase %}</div>{% endif %}
            </div>
        
        {% endif %}
    
    {% endfor %}   
</div>

<div class="centered-content" style="font-size: 0.8em; color: #555;">
    <a href="https://github.com/frc1418/banners.css" style="text-decoration: none;">
        Banners made with Erik Boesen's and FRC team 1418's banners.css.
    </a>
</div>
