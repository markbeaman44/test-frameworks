Feature: Testimony

    I want to add a Testimony

    @desktop
    Scenario Outline: Adding a Testimony
        Given the user logs into admin page
        And gets the token

        When the user clicks on testimony page
        And completes the testimony form: "<Name>", "<Location>", "<Description>", "<Image>" with token
        
        Then the user validates the information is displayed: "<Name>", "<Location>", "<Description>", "<Image>"

    Examples:
        | Name   | Location     | Description              | Image        | 
        | Tester | Planet Namek | Some form of information | no-image.png |
        | dever  | Planet Earth | information of some form | image.png    |

    @mobile
    Scenario Outline: Adding a Testimony via mobile
        Given the user logs into admin page via mobile menu
        And gets the token

        When the user clicks on testimony page via mobile menu
        And completes the testimony form: "<Name>", "<Location>", "<Description>", "<Image>" with token
        
        Then the user validates the information is displayed: "<Name>", "<Location>", "<Description>", "<Image>"

    Examples:
        | Name   | Location     | Description             | Image        | 
        | mobile | Planet Marrs | information of from one | image.png    |



# If mobile when clicking on menu it does option 1 else option 2 for desktop
# beforeEach to check tag for size mobile & desktop
# AfterEach to delete data and logout

#!/bin/python3

import sys
import os
import urllib.request
import json


# Complete the function below.
# https://jsonmock.hackerrank.com/api/countries/search?name=
import requests

def  getCountries(s, p):

    url = "https://jsonmock.hackerrank.com/api/countries/search?name=" + s
    response = requests.request("GET", url)

    x = response.json()['data']

    country_list = [y for y in x if y['population'] > p]
    return len(country_list)

    

f = open(os.environ['OUTPUT_PATH'], 'w')

    country_list = []

    url = "https://jsonmock.hackerrank.com/api/countries/search?name=" + s
    response = requests.request("GET", url)
    # I couldn't get it to work with pagination in time - sorry :(
    # and f-string formatting didnt like it here either 
    # response_total_pages = response.json()['total_pages']

    # for num in list(range(1,response_total_pages)):
    #     url = "https://jsonmock.hackerrank.com/api/countries/search?name=" + s + "&page=" + num
    #     response = requests.request("GET", url)
    #     x = response.json()['data']

    #     for y in x:
    #         if y['population'] > p:
    #          country_list.append(str(y['population']))   

    x = response.json()['data']