# SIMMONS API CLIENT STUBS FOR PYTHON
# This code was auto-generated by stubgen.py
# DO NOT EDIT IT BY HAND. Edit apis.yaml instead.
# This will ensure that changes are reflected in other
# languages stubs.

from __common import *

###
# Beginning stubs for laundry:
# Provides information on the current state of laundry machines in the building.
###

# Returns a raw dump of all avalible information on the laundry. Stopgap until a better API is enacted.
def get_raw(  ):
	return RPC_call( "laundry/" )

###
# End of stubs for laundry
###