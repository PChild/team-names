import tbapy
import os
from tqdm import tqdm
import json

tba = tbapy.TBA(os.getenv("TBA_KEY"))

YEAR = 2022
dist_teams = {}

teams_data = []


def ifNotNull(prop):
    return "" if prop is None else prop


for district in tqdm(tba.districts(YEAR)):
    for team in tba.district_teams(district.key, keys=True):
        dist_teams[team] = district.key[4:].upper()

for team in tqdm(tba.teams()):
    teams_data.append({
        'number': team.team_number,
        'name': ifNotNull(team.nickname),
        'rookie_year': "" if team.rookie_year is None else str(team.rookie_year),
        'city': ifNotNull(team.city),
        'state': ifNotNull(team.state_prov),
        'country': ifNotNull(team.country),
        'district': "" if team.key not in dist_teams else dist_teams[team.key]
    })

dataFile = open("data.json", "w")
dataFile.write(json.dumps(teams_data, indent=2))
dataFile.close()
