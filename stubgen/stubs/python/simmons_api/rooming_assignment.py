# SIMMONS API CLIENT STUBS FOR PYTHON
# This code was auto-generated by stubgen.py
# DO NOT EDIT IT BY HAND. Edit apis.yaml instead.
# This will ensure that changes are reflected in other
# languages stubs.

from __common import *

###
# Beginning stubs for rooming_assignment:
# Provides information about the mapping between residents and the rooms where they live. Historical data is planned.
###

# Returns the room that the given person is currently living in.
def get_room_by_person( username ):
	return RPC_call( "rooming_assignment//person/"+username+"/" )

# Returns the people that currently reside in the given room.
def get_people_by_room( roomnum ):
	return RPC_call( "rooming_assignment//room/"+roomnum+"/" )

###
# End of stubs for rooming_assignment
###