# SIMMONS API CLIENT STUBS FOR PYTHON
# This code was auto-generated by stubgen.py
# DO NOT EDIT IT BY HAND. Edit apis.yaml instead.
# This will ensure that changes are reflected in other
# languages stubs.

from __common import *

###
# Beginning stubs for rooms:
# Provides data about the physical characteristics of Simmons rooms.
###

# Returns a list of all rooms.
def get_all(  ):
	return RPC_call( "rooms/" )

# Returns all data for a specific room.
def get_room( roomnum ):
	return RPC_call( "rooms/"+roomnum+"/" )

###
# End of stubs for rooms
###