# SIMMONS API CLIENT STUBS FOR PYTHON
# This code was auto-generated from stubgen.py
# DO NOT EDIT IT BY HAND. Edit apis.yaml instead.
# This will ensure that changes are reflected in other
# languages stubs.

def RPC_call( path ):
	print 'tried to call to {{server_path}}' + path
	return None

{% for api in apis %}
# Beginning stubs for {{api['name']}}:
# {{api['desc']}}
{% for method in api['fxns'] %}
# {{method['desc']}}
def {{method['name']}}( {% for arg in method['args'] %}{{arg}}{% if not loop.last %}, {% endif %}{% endfor %} ):
	RPC_call( {{ f( api['path'] + method['path'] ) }} )
{% endfor %}
# End of stubs for {{api['name']}}
{% endfor %}
