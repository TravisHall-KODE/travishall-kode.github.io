const ont = {
 "CSM": {
  "name": "CSM",
  "type": "virtual",
  "description": "Virtual Communication Status Monitoring",
  "multi": false,
  "uses": [
   "virtual_communication_status"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "ESM": {
  "name": "ESM",
  "type": "virtual",
  "description": "Virtual Enable Status Monitoring",
  "multi": false,
  "uses": [
   "virtual_enable_status"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HVACOPM": {
  "name": "HVACOPM",
  "type": "virtual",
  "description": "Virtual HVAC Equipment Operation Mode",
  "multi": false,
  "uses": [
   "virtual_hvac_mode"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "ZTC": {
  "name": "ZTC",
  "type": "virtual",
  "description": "Virtual Calculated Zone Temperature Control",
  "multi": false,
  "uses": [
   "virtual_cooling_zone_air_temperature_setpoint",
   "virtual_heating_zone_air_temperature_setpoint"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "DAFC": {
  "name": "DAFC",
  "type": "virtual",
  "description": "Virtual Calculated Discharge Airflow Control",
  "multi": false,
  "uses": [
   "virtual_discharge_air_flowrate_sensor",
   "virtual_discharge_air_flowrate_setpoint"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "RDPM": {
  "name": "RDPM",
  "type": "virtual",
  "description": "Virtual Return Damper Position Monitoring",
  "multi": false,
  "uses": [
   "virtual_return_damper_percentage_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "MDPM": {
  "name": "MDPM",
  "type": "virtual",
  "description": "Virtual Mixed Damper Position Monitoring",
  "multi": false,
  "uses": [
   "virtual_mixed_damper_percentage_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "DDPM": {
  "name": "DDPM",
  "type": "virtual",
  "description": "Virtual Discharge Damper Position Monitoring",
  "multi": false,
  "uses": [
   "virtual_discharge_damper_percentage_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "ODPM": {
  "name": "ODPM",
  "type": "virtual",
  "description": "Virtual Outside Damper Position Monitoring",
  "multi": false,
  "uses": [
   "virtual_outside_damper_percentage_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "EDPM": {
  "name": "EDPM",
  "type": "virtual",
  "description": "Virtual Exhaust Damper Position Monitoring",
  "multi": false,
  "uses": [
   "virtual_exhaust_damper_percentage_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "BDPM": {
  "name": "BDPM",
  "type": "virtual",
  "description": "Virtual Bypass Damper Position Monitoring",
  "multi": false,
  "uses": [
   "virtual_bypass_damper_percentage_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CFM": {
  "name": "CFM",
  "type": "virtual",
  "description": "Virtual Condensing Fan Monitoring",
  "multi": false,
  "uses": [
   "virtual_condensing_fan_percentage_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SFM": {
  "name": "SFM",
  "type": "virtual",
  "description": "Virtual Supply Fan Monitoring",
  "multi": false,
  "uses": [
   "virtual_supply_fan_percentage_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "DFM": {
  "name": "DFM",
  "type": "virtual",
  "description": "Virtual Discharge Fan Monitoring",
  "multi": false,
  "uses": [
   "virtual_discharge_fan_percentage_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "RFM": {
  "name": "RFM",
  "type": "virtual",
  "description": "Virtual Return Fan Monitoring",
  "multi": false,
  "uses": [
   "virtual_return_fan_percentage_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "EFM": {
  "name": "EFM",
  "type": "virtual",
  "description": "Virtual Exhaust Fan Monitoring",
  "multi": false,
  "uses": [
   "virtual_exhaust_fan_percentage_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CUM": {
  "name": "CUM",
  "type": "virtual",
  "description": "Virtual Compressor Utilization Monitoring",
  "multi": false,
  "uses": [
   "virtual_compressor_percentage_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "PUM": {
  "name": "PUM",
  "type": "virtual",
  "description": "Virtual Pump Utilization Monitoring",
  "multi": false,
  "uses": [
   "virtual_pump_percentage_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "ECNUM": {
  "name": "ECNUM",
  "type": "virtual",
  "description": "Virtual Economizer Utilization Monitoring",
  "multi": false,
  "uses": [
   "virtual_economizer_percentage_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HWHUM": {
  "name": "HWHUM",
  "type": "virtual",
  "description": "Virtual Heat Wheel Utilization Monitoring",
  "multi": false,
  "uses": [
   "virtual_heat_wheel_percentage_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CHWPM": {
  "name": "CHWPM",
  "type": "virtual",
  "description": "Virtual Chilled Water Pump Monitoring",
  "multi": false,
  "uses": [
   "virtual_chilled_water_pump_percentage_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HWPM": {
  "name": "HWPM",
  "type": "virtual",
  "description": "Virtual Hot Water Pump Monitoring",
  "multi": false,
  "uses": [
   "virtual_hot_water_pump_percentage_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CDWPM": {
  "name": "CDWPM",
  "type": "virtual",
  "description": "Virtual Condenser Water Pump Monitoring",
  "multi": false,
  "uses": [
   "virtual_condensing_water_pump_percentage_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HTGUM": {
  "name": "HTGUM",
  "type": "virtual",
  "description": "Virtual Heating Utilization Monitoring",
  "multi": false,
  "uses": [
   "virtual_heating_percentage_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CLGUM": {
  "name": "CLGUM",
  "type": "virtual",
  "description": "Virtual Cooling Utilization Monitoring",
  "multi": false,
  "uses": [
   "virtual_cooling_percentage_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SUPPHTGUM": {
  "name": "SUPPHTGUM",
  "type": "virtual",
  "description": "Virtual Supplemental Heating Utilization Monitoring",
  "multi": false,
  "uses": [
   "virtual_supplemental_heat_percentage_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "ZCO2C": {
  "name": "ZCO2C",
  "type": "virtual",
  "description": "Virtual Calculated Zone CO2 Control",
  "multi": false,
  "uses": [
   "virtual_zone_air_co2_concentration_setpoint"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HMDM": {
  "name": "HMDM",
  "type": "virtual",
  "description": "Virtual Humidifier Monitoring",
  "multi": false,
  "uses": [
   "virtual_humidifier_percentage_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "DHMDM": {
  "name": "DHMDM",
  "type": "virtual",
  "description": "Virtual DeHumidifier Monitoring",
  "multi": false,
  "uses": [
   "virtual_dehumidifier_percentage_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "OCCM": {
  "name": "OCCM",
  "type": "virtual",
  "description": "Virtual Occupancy Monitoring",
  "multi": false,
  "uses": [
   "virtual_occupancy_status"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CHWVM": {
  "name": "CHWVM",
  "type": "virtual",
  "description": "Virtual Chilled Water Valve Monitoring",
  "multi": false,
  "uses": [
   "virtual_chilled_water_loop_valve_percentage_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CWVM": {
  "name": "CWVM",
  "type": "virtual",
  "description": "Virtual Condenser Water Valve Monitoring",
  "multi": false,
  "uses": [
   "virtual_condensing_water_loop_valve_percentage_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HWVM": {
  "name": "HWVM",
  "type": "virtual",
  "description": "Virtual Hot Water Valve Monitoring",
  "multi": false,
  "uses": [
   "virtual_hot_water_loop_valve_percentage_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "PLVM": {
  "name": "PLVM",
  "type": "virtual",
  "description": "Virtual Primary Loop Valve Monitoring",
  "multi": false,
  "uses": [
   "virtual_primary_loop_valve_percentage_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SLVM": {
  "name": "SLVM",
  "type": "virtual",
  "description": "Virtual Secondary Loop Valve Monitoring",
  "multi": false,
  "uses": [
   "virtual_secondary_loop_valve_percentage_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "PLPM": {
  "name": "PLPM",
  "type": "virtual",
  "description": "Virtual Primary Loop Pump Monitoring",
  "multi": false,
  "uses": [
   "virtual_primary_loop_pump_percentage_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SLPM": {
  "name": "SLPM",
  "type": "virtual",
  "description": "Virtual Secondary Loop Pump Monitoring",
  "multi": false,
  "uses": [
   "virtual_secondary_loop_pump_percentage_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "BVM": {
  "name": "BVM",
  "type": "virtual",
  "description": "Virtual Bypass Valve Monitoring",
  "multi": false,
  "uses": [
   "virtual_bypass_valve_percentage_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "LPA": {
  "name": "LPA",
  "type": "virtual",
  "description": "Virtual Low Priority Alarms",
  "multi": false,
  "uses": [
   "virtual_low_priority_alarm"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "MPA": {
  "name": "MPA",
  "type": "virtual",
  "description": "Virtual Medium Priority Alarms",
  "multi": false,
  "uses": [
   "virtual_medium_priority_alarm"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HPA": {
  "name": "HPA",
  "type": "virtual",
  "description": "Virtual High Priority Alarms",
  "multi": false,
  "uses": [
   "virtual_high_priority_alarm"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "FF": {
  "name": "FF",
  "type": "virtual",
  "description": "Virtual Fire Faults",
  "multi": false,
  "uses": [
   "virtual_fire_fault_alarm"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "FA": {
  "name": "FA",
  "type": "virtual",
  "description": "Virtual Fire Alarms",
  "multi": false,
  "uses": [
   "virtual_fire_alarm"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "AQM": {
  "name": "AQM",
  "type": "virtual",
  "description": "Virtual Air Quality Monitoring",
  "multi": false,
  "uses": [
   "virtual_detection_index_count"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "EXP": {
  "name": "EXP",
  "type": "virtual",
  "description": "Expanding Refrigerant Monitoring",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "ALARMS": {
  "name": "ALARMS",
  "type": "abstract",
  "description": "Alarms",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [],
  "applies": [
   "RSTAL",
   "LPAL",
   "MPAL",
   "HPAL",
   "PREVAL",
   "FLTLAB",
   "FILTERAL",
   "ESC"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "RSTAL": {
  "name": "RSTAL",
  "type": "abstract",
  "description": "Reset Alarm",
  "multi": false,
  "uses": [
   "reset_alarm"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "LPAL": {
  "name": "LPAL",
  "type": "abstract",
  "description": "Low Priority Alarms",
  "multi": true,
  "uses": [
   "low_priority_alarm"
  ],
  "opt_uses": [],
  "implements": [
   "LPA"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "MPAL": {
  "name": "MPAL",
  "type": "abstract",
  "description": "Medium Priority Alarms",
  "multi": true,
  "uses": [
   "medium_priority_alarm"
  ],
  "opt_uses": [],
  "implements": [
   "MPA"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HPAL": {
  "name": "HPAL",
  "type": "abstract",
  "description": "High Priority Alarms",
  "multi": true,
  "uses": [
   "high_priority_alarm"
  ],
  "opt_uses": [],
  "implements": [
   "HPA"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "PREVAL": {
  "name": "PREVAL",
  "type": "abstract",
  "description": "Previous Alarm",
  "multi": true,
  "uses": [
   "previous_alarm"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "FLTLAB": {
  "name": "FLTLAB",
  "type": "abstract",
  "description": "Fault Labels",
  "multi": true,
  "uses": [
   "fault_label"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "FILTERAL": {
  "name": "FILTERAL",
  "type": "abstract",
  "description": "Filter Alarms",
  "multi": true,
  "uses": [
   "filter_status"
  ],
  "opt_uses": [
   "filter_reset_command"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "ESC": {
  "name": "ESC",
  "type": "abstract",
  "description": "Emergency Control",
  "multi": false,
  "uses": [
   "emergency_command"
  ],
  "opt_uses": [
   "emergency_status"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "FIRE": {
  "name": "FIRE",
  "type": "abstract",
  "description": "Fire",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "FIREAL",
   "FIREFLT",
   "FIRESTS",
   "FIRESUPVR",
   "FIREBYPASS"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "FIREAL": {
  "name": "FIREAL",
  "type": "abstract",
  "description": "Fire Alarms",
  "multi": true,
  "uses": [
   "fire_alarm"
  ],
  "opt_uses": [],
  "implements": [
   "FA"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "FIREFLT": {
  "name": "FIREFLT",
  "type": "abstract",
  "description": "Fire Faults",
  "multi": true,
  "uses": [
   "fire_fault_label"
  ],
  "opt_uses": [],
  "implements": [
   "FF"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "FIRESTS": {
  "name": "FIRESTS",
  "type": "abstract",
  "description": "Fire Status",
  "multi": true,
  "uses": [
   "fire_status"
  ],
  "opt_uses": [],
  "implements": [
   "FA",
   "FF"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "FIRESUPVR": {
  "name": "FIRESUPVR",
  "type": "abstract",
  "description": "Fire Supervisory Status",
  "multi": true,
  "uses": [
   "fire_supervisory_status"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "FIREBYPASS": {
  "name": "FIREBYPASS",
  "type": "abstract",
  "description": "Fire Bypass Status",
  "multi": true,
  "uses": [
   "fire_bypass_status"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "REQUESTS": {
  "name": "REQUESTS",
  "type": "abstract",
  "description": "Cooling, Heating, Pressure Requests",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [],
  "applies": [
   "CLGREQ",
   "HTGREQ",
   "PRESSREQ"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CLGREQSTPS": {
  "name": "CLGREQSTPS",
  "type": "abstract",
  "description": "Cooling Requests Setpt Management",
  "multi": false,
  "uses": [
   "min_cooling_request_air_temperature_setpoint",
   "max_cooling_request_air_temperature_setpoint"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CLGLIMSTPS": {
  "name": "CLGLIMSTPS",
  "type": "abstract",
  "description": "Limit Cooling Setpoint Control",
  "multi": false,
  "uses": [
   "low_limit_cooling_air_temperature_setpoint",
   "high_limit_cooling_air_temperature_setpoint"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CLGREQ": {
  "name": "CLGREQ",
  "type": "abstract",
  "description": "Cooling Requests",
  "multi": false,
  "uses": [
   "cooling_request_count"
  ],
  "opt_uses": [
   "cooling_request_multiplier_count",
   "cooling_request_idle_count"
  ],
  "implements": [],
  "applies": [
   "CLGREQSTPS",
   "CLGLIMSTPS"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HTGREQSTPS": {
  "name": "HTGREQSTPS",
  "type": "abstract",
  "description": "Heating Requests Setpt Management",
  "multi": false,
  "uses": [
   "min_heating_request_air_temperature_setpoint",
   "max_heating_request_air_temperature_setpoint"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HTGLIMSTPS": {
  "name": "HTGLIMSTPS",
  "type": "abstract",
  "description": "Limit Heating Setpoint Control",
  "multi": false,
  "uses": [
   "low_limit_heating_air_temperature_setpoint",
   "high_limit_heating_air_temperature_setpoint"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HTGREQ": {
  "name": "HTGREQ",
  "type": "abstract",
  "description": "Heating Requests",
  "multi": false,
  "uses": [
   "heating_request_count"
  ],
  "opt_uses": [
   "heating_request_multiplier_count",
   "heating_request_idle_count"
  ],
  "implements": [],
  "applies": [
   "HTGREQSTPS",
   "HTGLIMSTPS"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "PRESSREQSTPS": {
  "name": "PRESSREQSTPS",
  "type": "abstract",
  "description": "Pressure Requests Damper Management",
  "multi": false,
  "uses": [
   "min_request_damper_percentage_command",
   "max_request_damper_percentage_command"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "PRESSREQ": {
  "name": "PRESSREQ",
  "type": "abstract",
  "description": "Pressure Requests",
  "multi": false,
  "uses": [
   "air_request_count"
  ],
  "opt_uses": [
   "air_request_multiplier_count",
   "air_request_idle_count"
  ],
  "implements": [],
  "applies": [
   "PRESSREQSTPS"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "DCTAP": {
  "name": "DCTAP",
  "type": "abstract",
  "description": "Duct Air Pressure Controls",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [],
  "applies": [
   "DAPSS",
   "EAPSS",
   "RAPSS",
   "MAPSS",
   "FDPS"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "DAPSS": {
  "name": "DAPSS",
  "type": "abstract",
  "description": "Discharge Air Pressure Control",
  "multi": false,
  "uses": [
   "discharge_air_pressure_setpoint"
  ],
  "opt_uses": [
   "low_limit_discharge_air_pressure_setpoint",
   "high_limit_discharge_air_pressure_setpoint",
   "zone_inlet_discharge_air_pressure_setpoint"
  ],
  "implements": [
   "DAPS"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "DAPS": {
  "name": "DAPS",
  "type": "abstract",
  "description": "Discharge Air Pressure Monitoring",
  "multi": false,
  "uses": [
   "discharge_air_pressure_sensor"
  ],
  "opt_uses": [
   "zone_inlet_discharge_air_pressure_sensor"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "EAPSS": {
  "name": "EAPSS",
  "type": "abstract",
  "description": "Exhaust Air Pressure Control",
  "multi": false,
  "uses": [
   "exhaust_air_pressure_setpoint"
  ],
  "opt_uses": [],
  "implements": [
   "EAPS"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "EAPS": {
  "name": "EAPS",
  "type": "abstract",
  "description": "Exhaust Air Pressure Monitoring",
  "multi": false,
  "uses": [
   "exhaust_air_pressure_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "RAPSS": {
  "name": "RAPSS",
  "type": "abstract",
  "description": "Return Air Pressure Control",
  "multi": false,
  "uses": [
   "return_air_pressure_setpoint"
  ],
  "opt_uses": [],
  "implements": [
   "RAPS"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "RAPS": {
  "name": "RAPS",
  "type": "abstract",
  "description": "Return Air Pressure Monitoring",
  "multi": false,
  "uses": [
   "return_air_pressure_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "MAPSS": {
  "name": "MAPSS",
  "type": "abstract",
  "description": "Mixed Air Pressure Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "mixed_air_pressure_setpoint",
   "high_limit_mixed_air_pressure_setpoint"
  ],
  "implements": [
   "MAPS"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "MAPS": {
  "name": "MAPS",
  "type": "abstract",
  "description": "Mixed Air Pressure Monitoring",
  "multi": false,
  "uses": [
   "mixed_air_pressure_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "FDPS": {
  "name": "FDPS",
  "type": "abstract",
  "description": "Filter Monitoring",
  "multi": true,
  "uses": [
   "filter_differential_air_pressure_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "ZNAP": {
  "name": "ZNAP",
  "type": "abstract",
  "description": "Zone And Building Air Pressure Control",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "BSPSS",
   "ZNSPSS"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "BSPSS": {
  "name": "BSPSS",
  "type": "abstract",
  "description": "Building Air Pressure Control",
  "multi": false,
  "uses": [
   "building_air_static_pressure_setpoint"
  ],
  "opt_uses": [],
  "implements": [
   "BSPS"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "BSPS": {
  "name": "BSPS",
  "type": "abstract",
  "description": "Building Air Pressure Monitoring",
  "multi": false,
  "uses": [
   "building_air_static_pressure_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "ZNSPSS": {
  "name": "ZNSPSS",
  "type": "abstract",
  "description": "Zone Air Pressure Control",
  "multi": false,
  "uses": [
   "zone_air_static_pressure_setpoint"
  ],
  "opt_uses": [],
  "implements": [
   "ZNSPS"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "ZNSPS": {
  "name": "ZNSPS",
  "type": "abstract",
  "description": "Zone Air Pressure Monitoring",
  "multi": false,
  "uses": [
   "zone_air_static_pressure_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "ZTSSG": {
  "name": "ZTSSG",
  "type": "abstract",
  "description": "Zone Temperature Controls",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [],
  "applies": [
   "ZTSS",
   "EFFZTSS",
   "EFFDUALZTSS",
   "OCCDUALZTSS",
   "UCCDUALZTSS",
   "NZTSS",
   "STBYDUALZTSS",
   "LOCALTEMPLIMIT"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "ZTSS": {
  "name": "ZTSS",
  "type": "abstract",
  "description": "Zone Temperature Control",
  "multi": false,
  "uses": [
   "zone_air_temperature_setpoint"
  ],
  "opt_uses": [],
  "implements": [
   "ZTS",
   "ZTC"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "EFFZTSS": {
  "name": "EFFZTSS",
  "type": "abstract",
  "description": "Effective Zone Temperature Control",
  "multi": false,
  "uses": [
   "effective_zone_air_temperature_setpoint"
  ],
  "opt_uses": [],
  "implements": [
   "ZTS",
   "ZTC"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "EFFDUALZTSS": {
  "name": "EFFDUALZTSS",
  "type": "abstract",
  "description": "Effective Dual Zone Temperature Control",
  "multi": false,
  "uses": [
   "effective_cooling_zone_air_temperature_setpoint",
   "effective_heating_zone_air_temperature_setpoint"
  ],
  "opt_uses": [],
  "implements": [
   "ZTS",
   "ZTC"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "OCCDUALZTSS": {
  "name": "OCCDUALZTSS",
  "type": "abstract",
  "description": "Occupied Dual Zone Temperature Control",
  "multi": false,
  "uses": [
   "occupied_cooling_zone_air_temperature_setpoint",
   "occupied_heating_zone_air_temperature_setpoint"
  ],
  "opt_uses": [],
  "implements": [
   "ZTS",
   "ZTC"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "UCCDUALZTSS": {
  "name": "UCCDUALZTSS",
  "type": "abstract",
  "description": "Unoccupied Dual Zone Temperature Setpoint",
  "multi": false,
  "uses": [
   "unoccupied_cooling_zone_air_temperature_setpoint",
   "unoccupied_heating_zone_air_temperature_setpoint"
  ],
  "opt_uses": [],
  "implements": [
   "ZTS"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "NZTSS": {
  "name": "NZTSS",
  "type": "abstract",
  "description": "Adjusted Network Zone Temperature Control",
  "multi": false,
  "uses": [
   "building_air_temperature_setpoint"
  ],
  "opt_uses": [
   "temperature_offset_setpoint"
  ],
  "implements": [
   "SPM",
   "ZTS",
   "ZTC"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "WCADJ": {
  "name": "WCADJ",
  "type": "abstract",
  "description": "Warm/Cool Adjust Control",
  "multi": false,
  "uses": [
   "temperature_offset_setpoint"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SPM": {
  "name": "SPM",
  "type": "abstract",
  "description": "Zone Temperature Control Mode",
  "multi": false,
  "uses": [
   "device_control_mode"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "ZTS": {
  "name": "ZTS",
  "type": "abstract",
  "description": "Zone Temperature Monitoring",
  "multi": false,
  "uses": [
   "zone_air_temperature_sensor"
  ],
  "opt_uses": [
   "zone_air_temperature_dewpoint_sensor"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "OPM": {
  "name": "OPM",
  "type": "abstract",
  "description": "Operation Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "control_mode",
   "control_status"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "ESS": {
  "name": "ESS",
  "type": "abstract",
  "description": "Enable Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "enable_command",
   "enable_status"
  ],
  "implements": [
   "ESM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SS": {
  "name": "SS",
  "type": "abstract",
  "description": "Run Control",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "RC",
   "RM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "RC": {
  "name": "RC",
  "type": "abstract",
  "description": "Run Command Control",
  "multi": false,
  "uses": [
   "run_command"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "RM": {
  "name": "RM",
  "type": "abstract",
  "description": "Run Monitoring",
  "multi": false,
  "uses": [
   "run_status"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SC": {
  "name": "SC",
  "type": "abstract",
  "description": "Staged Run Control",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "SRS",
   "SRC"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SRS": {
  "name": "SRS",
  "type": "abstract",
  "description": "Staged Run Status Monitoring",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "low_speed_status",
   "medium_speed_status",
   "high_speed_status"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SRC": {
  "name": "SRC",
  "type": "abstract",
  "description": "Staged Run Command Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "low_speed_command",
   "medium_speed_command",
   "high_speed_command"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "PRC": {
  "name": "PRC",
  "type": "abstract",
  "description": "Run Percentage Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "run_percentage_command",
   "run_percentage_sensor"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "FRQ": {
  "name": "FRQ",
  "type": "abstract",
  "description": "Run Frequency Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "run_frequency_sensor",
   "run_frequency_command"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "ANGVEL": {
  "name": "ANGVEL",
  "type": "abstract",
  "description": "Run Angular Velocity Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "run_angularvelocity_sensor",
   "run_angularvelocity_command"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "VFDBYPASS": {
  "name": "VFDBYPASS",
  "type": "abstract",
  "description": "VFD Bypass Monitoring",
  "multi": false,
  "uses": [
   "vfd_bypass_status"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SPG": {
  "name": "SPG",
  "type": "abstract",
  "description": "Staged Pump",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "SP",
   "PUM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SP": {
  "name": "SP",
  "type": "abstract",
  "description": "Pump Stages",
  "multi": true,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "RM"
  ],
  "applies": [
   "SS",
   "ESS",
   "FRQ",
   "ANGVEL",
   "PRC",
   "STATS"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "REVAL": {
  "name": "REVAL",
  "type": "abstract",
  "description": "Reversing Valve Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "reversing_heating_cooling_valve_command",
   "reversing_heating_cooling_valve_status"
  ],
  "implements": [
   "HVACOPM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HVACC": {
  "name": "HVACC",
  "type": "abstract",
  "description": "HVAC Device Control",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "HVACOPM",
   "DSM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "DSM": {
  "name": "DSM",
  "type": "abstract",
  "description": "Device Control or Status",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "device_status",
   "device_mode"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "UNOCCHVACC": {
  "name": "UNOCCHVACC",
  "type": "abstract",
  "description": "Unoccupied HVAC Device Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "unoccupied_device_mode",
   "unoccupied_device_status"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "OCCUPANCY": {
  "name": "OCCUPANCY",
  "type": "abstract",
  "description": "Occupancy Control",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "OM",
   "EOS"
  ],
  "applies": [
   "COUNTER",
   "MOTION",
   "OCCOVR"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "OM": {
  "name": "OM",
  "type": "abstract",
  "description": "Occupied Mode Control",
  "multi": false,
  "uses": [
   "occupied_mode"
  ],
  "opt_uses": [],
  "implements": [
   "OCCM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "EOS": {
  "name": "EOS",
  "type": "abstract",
  "description": "Effective Occupancy Monitoring",
  "multi": false,
  "uses": [
   "occupancy_status"
  ],
  "opt_uses": [],
  "implements": [
   "OCCM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "STATS": {
  "name": "STATS",
  "type": "abstract",
  "description": "Run Statistics Monitoring",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "run_time_accumulator",
   "start_counter",
   "run_energy_accumulator"
  ],
  "implements": [],
  "applies": [
   "ECONS"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "ECONS": {
  "name": "ECONS",
  "type": "abstract",
  "description": "Electricity Statistics Monitoring",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "run_current_sensor",
   "run_power_sensor",
   "run_voltage_sensor"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "ATC": {
  "name": "ATC",
  "type": "abstract",
  "description": "Air Temperatures Control",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [],
  "applies": [
   "DTSS",
   "RTSS",
   "STSS",
   "MTSS",
   "OTSS",
   "ETS",
   "DUALCT"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "DTSS": {
  "name": "DTSS",
  "type": "abstract",
  "description": "Discharge Temperature Control",
  "multi": false,
  "uses": [
   "discharge_air_temperature_setpoint"
  ],
  "opt_uses": [],
  "implements": [
   "DTS"
  ],
  "applies": [
   "DUALDTSS"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "DUALDTSS": {
  "name": "DUALDTSS",
  "type": "abstract",
  "description": "Dual Discharge Temperature Control",
  "multi": false,
  "uses": [
   "low_limit_discharge_air_temperature_setpoint",
   "high_limit_discharge_air_temperature_setpoint"
  ],
  "opt_uses": [],
  "implements": [
   "DTS"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "DTS": {
  "name": "DTS",
  "type": "abstract",
  "description": "Discharge Temperature Monitoring",
  "multi": false,
  "uses": [
   "discharge_air_temperature_sensor"
  ],
  "opt_uses": [
   "discharge_air_temperature_dewpoint_sensor"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "STSS": {
  "name": "STSS",
  "type": "abstract",
  "description": "Supply Temperature Control",
  "multi": false,
  "uses": [
   "supply_air_temperature_setpoint"
  ],
  "opt_uses": [],
  "implements": [
   "STS"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "STS": {
  "name": "STS",
  "type": "abstract",
  "description": "Supply Temperature Monitoring",
  "multi": false,
  "uses": [
   "supply_air_temperature_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "ETS": {
  "name": "ETS",
  "type": "abstract",
  "description": "Exhaust Temperature Monitoring",
  "multi": false,
  "uses": [
   "exhaust_air_temperature_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "MTSS": {
  "name": "MTSS",
  "type": "abstract",
  "description": "Mixed Temperature Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "mixed_air_temperature_setpoint",
   "low_limit_mixed_air_temperature_setpoint"
  ],
  "implements": [
   "MTS"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "MTS": {
  "name": "MTS",
  "type": "abstract",
  "description": "Mixed Temperature Monitoring",
  "multi": false,
  "uses": [
   "mixed_air_temperature_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "OTSS": {
  "name": "OTSS",
  "type": "abstract",
  "description": "Outside Temperature Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "outside_air_temperature_enable_setpoint",
   "high_limit_outside_air_temperature_enable_setpoint",
   "low_limit_outside_air_temperature_enable_setpoint"
  ],
  "implements": [
   "OTS"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "OTS": {
  "name": "OTS",
  "type": "abstract",
  "description": "Outside Temperature Monitoring",
  "multi": false,
  "uses": [
   "outside_air_temperature_sensor"
  ],
  "opt_uses": [
   "outside_air_humidity_sensor",
   "outside_air_specificenthalpy_sensor",
   "outside_air_temperature_dewpoint_sensor",
   "outside_air_temperature_wetbulb_sensor",
   "outside_air_pressure_sensor"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "RTSS": {
  "name": "RTSS",
  "type": "abstract",
  "description": "Return Air Temperature Control",
  "multi": false,
  "uses": [
   "return_air_temperature_setpoint"
  ],
  "opt_uses": [],
  "implements": [
   "RTS"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "RTS": {
  "name": "RTS",
  "type": "abstract",
  "description": "Return Temperature Monitoring",
  "multi": false,
  "uses": [
   "return_air_temperature_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "DUALCT": {
  "name": "DUALCT",
  "type": "abstract",
  "description": "Dual Coil Temperature Control",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "CLGCT",
   "HTGCT"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CLGCT": {
  "name": "CLGCT",
  "type": "abstract",
  "description": "Cooling Coil Air Leaving Temperature Control",
  "multi": false,
  "uses": [
   "cooling_coil_leaving_air_temperature_sensor"
  ],
  "opt_uses": [
   "cooling_coil_leaving_air_temperature_setpoint"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HTGCT": {
  "name": "HTGCT",
  "type": "abstract",
  "description": "Heating Coil Air Leaving Temperature Control",
  "multi": false,
  "uses": [
   "heating_coil_leaving_air_temperature_sensor"
  ],
  "opt_uses": [
   "heating_coil_leaving_air_temperature_setpoint"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "AFC": {
  "name": "AFC",
  "type": "abstract",
  "description": "Airflows Control",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [],
  "applies": [
   "DASSG",
   "RAFSC",
   "OAFSC",
   "EAFSC"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "DASSG": {
  "name": "DASSG",
  "type": "abstract",
  "description": "Discharge Airflow Control",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [],
  "applies": [
   "DAFSC",
   "EFFDAFC",
   "OCCLGDAFC",
   "OCCHTGDAFC",
   "UCCLGDAFC",
   "UCCHTGDAFC",
   "DDAFC"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "OCCLGDAFC": {
  "name": "OCCLGDAFC",
  "type": "abstract",
  "description": "Occupied Cooling Discharge Airflow Control",
  "multi": false,
  "uses": [
   "max_occupied_cooling_discharge_air_flowrate_setpoint",
   "min_occupied_cooling_discharge_air_flowrate_setpoint"
  ],
  "opt_uses": [],
  "implements": [
   "DAF"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "OCCHTGDAFC": {
  "name": "OCCHTGDAFC",
  "type": "abstract",
  "description": "Occupied Heating Discharge Airflow Control",
  "multi": false,
  "uses": [
   "max_occupied_heating_discharge_air_flowrate_setpoint",
   "min_occupied_heating_discharge_air_flowrate_setpoint"
  ],
  "opt_uses": [],
  "implements": [
   "DAF"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "UCCLGDAFC": {
  "name": "UCCLGDAFC",
  "type": "abstract",
  "description": "Unoccupied Cooling Discharge Airflow Control",
  "multi": false,
  "uses": [
   "max_unoccupied_cooling_discharge_air_flowrate_setpoint",
   "min_unoccupied_cooling_discharge_air_flowrate_setpoint"
  ],
  "opt_uses": [],
  "implements": [
   "DAF"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "UCCHTGDAFC": {
  "name": "UCCHTGDAFC",
  "type": "abstract",
  "description": "Unoccupied Heating Discharge Airflow Control",
  "multi": false,
  "uses": [
   "max_unoccupied_heating_discharge_air_flowrate_setpoint",
   "min_unoccupied_heating_discharge_air_flowrate_setpoint"
  ],
  "opt_uses": [],
  "implements": [
   "DAF"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "EFFDAFC": {
  "name": "EFFDAFC",
  "type": "abstract",
  "description": "Effective Discharge Airflow Control",
  "multi": false,
  "uses": [
   "effective_discharge_air_flowrate_setpoint"
  ],
  "opt_uses": [],
  "implements": [
   "DAF",
   "DAFC"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "DAFSC": {
  "name": "DAFSC",
  "type": "abstract",
  "description": "Discharge Airflow Control",
  "multi": false,
  "uses": [
   "discharge_air_flowrate_setpoint"
  ],
  "opt_uses": [
   "max_discharge_air_flowrate_setpoint",
   "min_discharge_air_flowrate_setpoint"
  ],
  "implements": [
   "DAF",
   "DAFC"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "DAF": {
  "name": "DAF",
  "type": "abstract",
  "description": "Discharge Airflow Monitoring",
  "multi": false,
  "uses": [
   "discharge_air_flowrate_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "RAFSC": {
  "name": "RAFSC",
  "type": "abstract",
  "description": "Return Airflow Control",
  "multi": true,
  "uses": [
   "return_air_flowrate_setpoint"
  ],
  "opt_uses": [],
  "implements": [
   "RAF"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "RAF": {
  "name": "RAF",
  "type": "abstract",
  "description": "Return Airflow Monitoring",
  "multi": false,
  "uses": [
   "return_air_flowrate_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "OAFSC": {
  "name": "OAFSC",
  "type": "abstract",
  "description": "Outside Airflow Control",
  "multi": true,
  "uses": [
   "outside_air_flowrate_setpoint"
  ],
  "opt_uses": [
   "max_outside_air_flowrate_setpoint",
   "min_outside_air_flowrate_setpoint"
  ],
  "implements": [
   "OAF"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "OAF": {
  "name": "OAF",
  "type": "abstract",
  "description": "Outside Airflow Monitoring",
  "multi": false,
  "uses": [
   "outside_air_flowrate_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "EAFSC": {
  "name": "EAFSC",
  "type": "abstract",
  "description": "Exhaust Airflow Control",
  "multi": true,
  "uses": [
   "exhaust_air_flowrate_setpoint"
  ],
  "opt_uses": [
   "max_exhaust_air_flowrate_setpoint",
   "min_exhaust_air_flowrate_setpoint"
  ],
  "implements": [
   "EAF"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "EAF": {
  "name": "EAF",
  "type": "abstract",
  "description": "Exhaust Airflow Monitoring",
  "multi": false,
  "uses": [
   "exhaust_air_flowrate_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "DG": {
  "name": "DG",
  "type": "abstract",
  "description": "Dampers",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [],
  "applies": [
   "DDG",
   "RDG",
   "MDG",
   "ODG",
   "EDG",
   "BYPD"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "DDG": {
  "name": "DDG",
  "type": "abstract",
  "description": "Discharge Damper",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [],
  "applies": [
   "DDSS",
   "DDPRC",
   "CDDD",
   "HDDD",
   "BDPRC",
   "FDC"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "DDSS": {
  "name": "DDSS",
  "type": "abstract",
  "description": "Discharge Damper Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "discharge_damper_command",
   "discharge_damper_status"
  ],
  "implements": [
   "DDPM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "DDPRC": {
  "name": "DDPRC",
  "type": "abstract",
  "description": "Discharge Damper Percentage Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "discharge_damper_percentage_sensor",
   "discharge_damper_percentage_command"
  ],
  "implements": [
   "DDPM"
  ],
  "applies": [
   "DDFLOATING"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "DDFLOATING": {
  "name": "DDFLOATING",
  "type": "abstract",
  "description": "Discharge Damper Floating Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "discharge_damper_open_command",
   "discharge_damper_closed_command"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CDDD": {
  "name": "CDDD",
  "type": "abstract",
  "description": "Cold Duct Damper Control",
  "multi": false,
  "uses": [
   "cold_deck_damper_percentage_command"
  ],
  "opt_uses": [
   "cold_deck_damper_percentage_sensor"
  ],
  "implements": [
   "CLGUM",
   "HVACOPM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HDDD": {
  "name": "HDDD",
  "type": "abstract",
  "description": "Hot Duct Damper Control",
  "multi": false,
  "uses": [
   "hot_deck_damper_percentage_command"
  ],
  "opt_uses": [
   "hot_deck_damper_percentage_sensor"
  ],
  "implements": [
   "HTGUM",
   "HVACOPM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "FDC": {
  "name": "FDC",
  "type": "abstract",
  "description": "Floor Damper Control",
  "multi": false,
  "uses": [
   "floor_damper_command"
  ],
  "opt_uses": [
   "floor_damper_status"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "BDPRC": {
  "name": "BDPRC",
  "type": "abstract",
  "description": "Balancing Damper Command",
  "multi": false,
  "uses": [
   "balancing_damper_percentage_command"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "RDG": {
  "name": "RDG",
  "type": "abstract",
  "description": "Return Damper",
  "multi": true,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "RDSS",
   "RDPRC"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "RDSS": {
  "name": "RDSS",
  "type": "abstract",
  "description": "Return Damper Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "return_damper_command",
   "return_damper_status"
  ],
  "implements": [
   "RDPM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "RDPRC": {
  "name": "RDPRC",
  "type": "abstract",
  "description": "Return Damper Percentage Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "return_damper_percentage_command",
   "return_damper_percentage_sensor"
  ],
  "implements": [
   "RDPM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "MDG": {
  "name": "MDG",
  "type": "abstract",
  "description": "Mixed Damper",
  "multi": true,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "MDSS",
   "MDPRC"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "MDSS": {
  "name": "MDSS",
  "type": "abstract",
  "description": "Mixed Damper Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "mixed_damper_command",
   "mixed_damper_status"
  ],
  "implements": [
   "MDPM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "MDPRC": {
  "name": "MDPRC",
  "type": "abstract",
  "description": "Mixed Damper Percentage Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "mixed_damper_percentage_command",
   "mixed_damper_percentage_sensor"
  ],
  "implements": [
   "MDPM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "ODG": {
  "name": "ODG",
  "type": "abstract",
  "description": "Outside Damper",
  "multi": true,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "ODSS",
   "ODPRC",
   "ODHLPRC"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "ODSS": {
  "name": "ODSS",
  "type": "abstract",
  "description": "Outside Damper Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "outside_damper_command",
   "outside_damper_status"
  ],
  "implements": [
   "ODPM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "ODHLPRC": {
  "name": "ODHLPRC",
  "type": "abstract",
  "description": "Outside Damper Dual Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "high_limit_outside_damper_percentage_command",
   "low_limit_outside_damper_percentage_command"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "ODPRC": {
  "name": "ODPRC",
  "type": "abstract",
  "description": "Outside Damper Percentage Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "outside_damper_percentage_sensor",
   "outside_damper_percentage_command"
  ],
  "implements": [
   "ODPM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "EDG": {
  "name": "EDG",
  "type": "abstract",
  "description": "Exhaust Damper",
  "multi": true,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "EDSS",
   "EDPRC"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "EDSS": {
  "name": "EDSS",
  "type": "abstract",
  "description": "Exhaust Damper Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "exhaust_damper_command",
   "exhaust_damper_status"
  ],
  "implements": [
   "EDPM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "EDPRC": {
  "name": "EDPRC",
  "type": "abstract",
  "description": "Exhaust Damper Percentage Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "exhaust_damper_percentage_sensor",
   "exhaust_damper_percentage_command"
  ],
  "implements": [
   "EDPM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "BYPD": {
  "name": "BYPD",
  "type": "abstract",
  "description": "Bypass Damper Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "bypass_damper_percentage_sensor",
   "bypass_damper_percentage_command"
  ],
  "implements": [
   "BDPM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "FG": {
  "name": "FG",
  "type": "abstract",
  "description": "Fans Group",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [],
  "applies": [
   "DFG",
   "RFG",
   "EFG",
   "SFG"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "DFG": {
  "name": "DFG",
  "type": "abstract",
  "description": "Discharge Fan",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [],
  "applies": [
   "DFSS",
   "DFEN",
   "DFSTATS",
   "DFSTAGE",
   "DFCS",
   "DFPRS",
   "DFPRC",
   "DFFREQ",
   "DFMODE"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "DFSS": {
  "name": "DFSS",
  "type": "abstract",
  "description": "Discharge Fan Control",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "DFC",
   "DFS"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "DFC": {
  "name": "DFC",
  "type": "abstract",
  "description": "Discharge Fan Command Control",
  "multi": false,
  "uses": [
   "discharge_fan_command"
  ],
  "opt_uses": [],
  "implements": [
   "DFM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "DFS": {
  "name": "DFS",
  "type": "abstract",
  "description": "Discharge Fan Monitoring",
  "multi": false,
  "uses": [
   "discharge_fan_status"
  ],
  "opt_uses": [],
  "implements": [
   "DFM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "DFEN": {
  "name": "DFEN",
  "type": "abstract",
  "description": "Discharge Fan Enable Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "discharge_fan_enable_command",
   "discharge_fan_enable_status"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "DFMODE": {
  "name": "DFMODE",
  "type": "abstract",
  "description": "Discharge Fan Mode Control",
  "multi": false,
  "uses": [
   "discharge_fan_mode"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "DFSTATS": {
  "name": "DFSTATS",
  "type": "abstract",
  "description": "Discharge Fan Statistics",
  "multi": false,
  "uses": [
   "discharge_fan_run_time_accumulator"
  ],
  "opt_uses": [
   "discharge_fan_energy_accumulator"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "DFSTAGE": {
  "name": "DFSTAGE",
  "type": "abstract",
  "description": "Discharge Fan Staged Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "high_discharge_fan_speed_command",
   "low_discharge_fan_speed_command",
   "medium_discharge_fan_speed_command",
   "high_discharge_fan_speed_status",
   "low_discharge_fan_speed_status",
   "medium_discharge_fan_speed_status"
  ],
  "implements": [
   "DFM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "DFCS": {
  "name": "DFCS",
  "type": "abstract",
  "description": "Discharge Fan Electricity Monitoring",
  "multi": false,
  "uses": [
   "discharge_fan_current_sensor"
  ],
  "opt_uses": [
   "discharge_fan_power_sensor"
  ],
  "implements": [
   "DFM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "DFFREQ": {
  "name": "DFFREQ",
  "type": "abstract",
  "description": "Discharge Fan Frequency Monitoring",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "discharge_fan_frequency_sensor",
   "discharge_fan_angularvelocity_sensor"
  ],
  "implements": [
   "DFM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "DFPRS": {
  "name": "DFPRS",
  "type": "abstract",
  "description": "Discharge Fan Percentage Monitoring",
  "multi": false,
  "uses": [
   "discharge_fan_speed_percentage_sensor"
  ],
  "opt_uses": [],
  "implements": [
   "DFM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "DFPRC": {
  "name": "DFPRC",
  "type": "abstract",
  "description": "Discharge Fan Percentage Control",
  "multi": false,
  "uses": [
   "discharge_fan_speed_percentage_command"
  ],
  "opt_uses": [
   "low_limit_discharge_fan_speed_percentage_command"
  ],
  "implements": [
   "DFM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SFG": {
  "name": "SFG",
  "type": "abstract",
  "description": "Supply Fan",
  "multi": true,
  "uses": [],
  "opt_uses": [],
  "implements": [],
  "applies": [
   "SFSS",
   "SFSTATS",
   "SFCS",
   "SFFREQ",
   "SFPRS",
   "SFPRC"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SFSTATS": {
  "name": "SFSTATS",
  "type": "abstract",
  "description": "Supply Fan Statistics",
  "multi": false,
  "uses": [
   "supply_fan_run_time_accumulator"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SFSS": {
  "name": "SFSS",
  "type": "abstract",
  "description": "Supply Fan Control",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "SFS",
   "SFC"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SFC": {
  "name": "SFC",
  "type": "abstract",
  "description": "Supply Fan Command Control",
  "multi": false,
  "uses": [
   "supply_fan_command"
  ],
  "opt_uses": [],
  "implements": [
   "SFM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SFS": {
  "name": "SFS",
  "type": "abstract",
  "description": "Supply Fan Monitoring",
  "multi": false,
  "uses": [
   "supply_fan_status"
  ],
  "opt_uses": [],
  "implements": [
   "SFM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SFCS": {
  "name": "SFCS",
  "type": "abstract",
  "description": "Supply Fan Electricity Monitoring",
  "multi": false,
  "uses": [
   "supply_fan_current_sensor"
  ],
  "opt_uses": [],
  "implements": [
   "SFM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SFFREQ": {
  "name": "SFFREQ",
  "type": "abstract",
  "description": "Supply Fan Frequency Monitoring",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "supply_fan_frequency_sensor",
   "supply_fan_angularvelocity_sensor"
  ],
  "implements": [
   "SFM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SFPRS": {
  "name": "SFPRS",
  "type": "abstract",
  "description": "Supply Fan Percentage Monitoring",
  "multi": false,
  "uses": [
   "supply_fan_speed_percentage_sensor"
  ],
  "opt_uses": [],
  "implements": [
   "SFM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SFPRC": {
  "name": "SFPRC",
  "type": "abstract",
  "description": "Supply Fan Percentage Control",
  "multi": false,
  "uses": [
   "supply_fan_speed_percentage_command"
  ],
  "opt_uses": [
   "low_limit_supply_fan_speed_percentage_command"
  ],
  "implements": [
   "SFM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "RFG": {
  "name": "RFG",
  "type": "abstract",
  "description": "Return Fan",
  "multi": true,
  "uses": [],
  "opt_uses": [],
  "implements": [],
  "applies": [
   "RFSS",
   "RFSTATS",
   "RFCS",
   "RFPRS",
   "RFFREQ",
   "RFPRC"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "RFSTATS": {
  "name": "RFSTATS",
  "type": "abstract",
  "description": "Return Fan Statistics",
  "multi": false,
  "uses": [
   "return_fan_run_time_accumulator"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "RFSS": {
  "name": "RFSS",
  "type": "abstract",
  "description": "Return Fan Control",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "RFC",
   "RFS"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "RFC": {
  "name": "RFC",
  "type": "abstract",
  "description": "Return Fan Command Control",
  "multi": false,
  "uses": [
   "return_fan_command"
  ],
  "opt_uses": [],
  "implements": [
   "RFM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "RFS": {
  "name": "RFS",
  "type": "abstract",
  "description": "Return Fan Monitoring",
  "multi": false,
  "uses": [
   "return_fan_status"
  ],
  "opt_uses": [],
  "implements": [
   "RFM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "RFCS": {
  "name": "RFCS",
  "type": "abstract",
  "description": "Return Fan Electricity Monitoring",
  "multi": false,
  "uses": [
   "return_fan_current_sensor"
  ],
  "opt_uses": [],
  "implements": [
   "RFM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "RFFREQ": {
  "name": "RFFREQ",
  "type": "abstract",
  "description": "Return Fan Frequency Monitoring",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "return_fan_frequency_sensor",
   "return_fan_angularvelocity_sensor"
  ],
  "implements": [
   "RFM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "RFPRS": {
  "name": "RFPRS",
  "type": "abstract",
  "description": "Return Fan Percentage Monitoring",
  "multi": false,
  "uses": [
   "return_fan_speed_percentage_sensor"
  ],
  "opt_uses": [],
  "implements": [
   "RFM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "RFPRC": {
  "name": "RFPRC",
  "type": "abstract",
  "description": "Return Fan Percentage Control",
  "multi": false,
  "uses": [
   "return_fan_speed_percentage_command"
  ],
  "opt_uses": [
   "low_limit_return_fan_speed_percentage_command"
  ],
  "implements": [
   "RFM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "EFG": {
  "name": "EFG",
  "type": "abstract",
  "description": "Exhaust Fan",
  "multi": true,
  "uses": [],
  "opt_uses": [],
  "implements": [],
  "applies": [
   "EFSS",
   "EFSTATS",
   "EFCS",
   "EFPRS",
   "EFPRC",
   "EFSTAGE"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "EFSTATS": {
  "name": "EFSTATS",
  "type": "abstract",
  "description": "Exhaust Fan Statistics",
  "multi": false,
  "uses": [
   "exhaust_fan_run_time_accumulator"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "EFSS": {
  "name": "EFSS",
  "type": "abstract",
  "description": "Exhaust Fan Control",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "EFC",
   "EFS"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "EFC": {
  "name": "EFC",
  "type": "abstract",
  "description": "Exhaust Fan Command Control",
  "multi": false,
  "uses": [
   "exhaust_fan_command"
  ],
  "opt_uses": [],
  "implements": [
   "EFM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "EFS": {
  "name": "EFS",
  "type": "abstract",
  "description": "Exhaust Fan Monitoring",
  "multi": false,
  "uses": [
   "exhaust_fan_status"
  ],
  "opt_uses": [],
  "implements": [
   "EFM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "EFCS": {
  "name": "EFCS",
  "type": "abstract",
  "description": "Exhaust Fan Electricity Monitoring",
  "multi": false,
  "uses": [
   "exhaust_fan_current_sensor"
  ],
  "opt_uses": [],
  "implements": [
   "EFM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "EFFREQ": {
  "name": "EFFREQ",
  "type": "abstract",
  "description": "Exhaust Fan Frequency Monitoring",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "exhaust_fan_frequency_sensor",
   "exhaust_fan_angularvelocity_sensor"
  ],
  "implements": [
   "EFM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "EFPRS": {
  "name": "EFPRS",
  "type": "abstract",
  "description": "Exhaust Fan Percentage Monitoring",
  "multi": false,
  "uses": [
   "exhaust_fan_speed_percentage_sensor"
  ],
  "opt_uses": [],
  "implements": [
   "EFM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "EFPRC": {
  "name": "EFPRC",
  "type": "abstract",
  "description": "Exhaust Fan Percentage Control",
  "multi": false,
  "uses": [
   "exhaust_fan_speed_percentage_command"
  ],
  "opt_uses": [
   "low_limit_exhaust_fan_speed_percentage_command"
  ],
  "implements": [
   "EFM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "EFSTAGE": {
  "name": "EFSTAGE",
  "type": "abstract",
  "description": "Exhaust Fan Staged Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "high_exhaust_fan_speed_command",
   "low_exhaust_fan_speed_command",
   "medium_exhaust_fan_speed_command",
   "high_exhaust_fan_speed_status",
   "low_exhaust_fan_speed_status",
   "medium_exhaust_fan_speed_status"
  ],
  "implements": [
   "EFM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CFG": {
  "name": "CFG",
  "type": "abstract",
  "description": "Condensing Fan",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [],
  "applies": [
   "CFSS",
   "CFSTATS",
   "CFSTAGE",
   "CFCS",
   "CFMODE",
   "CFPRS",
   "CFPRC",
   "CFFREQ"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CFSS": {
  "name": "CFSS",
  "type": "abstract",
  "description": "Condensing Fan Control",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "CFC",
   "CFS"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CFC": {
  "name": "CFC",
  "type": "abstract",
  "description": "Condensing Fan Command Control",
  "multi": false,
  "uses": [
   "condensing_fan_command"
  ],
  "opt_uses": [],
  "implements": [
   "CFM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CFS": {
  "name": "CFS",
  "type": "abstract",
  "description": "Condensing Fan Monitoring",
  "multi": false,
  "uses": [
   "condensing_fan_status"
  ],
  "opt_uses": [],
  "implements": [
   "CFM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CFEN": {
  "name": "CFEN",
  "type": "abstract",
  "description": "Condensing Fan Enable Status/Command",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "condensing_fan_enable_command",
   "condensing_fan_enable_status"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CFMODE": {
  "name": "CFMODE",
  "type": "abstract",
  "description": "Condensing Fan Mode Control",
  "multi": false,
  "uses": [
   "condensing_fan_mode"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CFSTATS": {
  "name": "CFSTATS",
  "type": "abstract",
  "description": "Condensing Fan Statistics",
  "multi": false,
  "uses": [
   "condensing_fan_run_time_accumulator"
  ],
  "opt_uses": [
   "condensing_fan_energy_accumulator"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CFSTAGE": {
  "name": "CFSTAGE",
  "type": "abstract",
  "description": "Condensing Fan Staged Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "high_condensing_fan_speed_command",
   "low_condensing_fan_speed_command",
   "medium_condensing_fan_speed_command",
   "high_condensing_fan_speed_status",
   "low_condensing_fan_speed_status",
   "medium_condensing_fan_speed_status"
  ],
  "implements": [
   "CFM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CFCS": {
  "name": "CFCS",
  "type": "abstract",
  "description": "Condensing Fan Electricity Monitoring",
  "multi": false,
  "uses": [
   "condensing_fan_current_sensor"
  ],
  "opt_uses": [
   "condensing_fan_power_sensor"
  ],
  "implements": [
   "CFM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CFFREQ": {
  "name": "CFFREQ",
  "type": "abstract",
  "description": "Condensing Fan Frequency Monitoring",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "condensing_fan_frequency_sensor",
   "condensing_fan_angularvelocity_sensor"
  ],
  "implements": [
   "CFM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CFPRS": {
  "name": "CFPRS",
  "type": "abstract",
  "description": "Condensing Fan Percentage Monitoring",
  "multi": false,
  "uses": [
   "condensing_fan_speed_percentage_sensor"
  ],
  "opt_uses": [],
  "implements": [
   "CFM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CFPRC": {
  "name": "CFPRC",
  "type": "abstract",
  "description": "Condenser Fan Speed Percentage Control",
  "multi": false,
  "uses": [
   "condensing_fan_speed_percentage_command"
  ],
  "opt_uses": [
   "low_limit_condensing_fan_speed_percentage_command"
  ],
  "implements": [
   "CFM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HEATPUMP": {
  "name": "HEATPUMP",
  "type": "abstract",
  "description": "Heat Pump",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "CUM",
   "CLGUM",
   "HTGUM"
  ],
  "applies": [
   "DXHEATING",
   "CLGHTGCSCLOOP",
   "CLGHTGICLOOP",
   "PLOOP",
   "HCD"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CLGHTGCSCLOOP": {
  "name": "CLGHTGCSCLOOP",
  "type": "abstract",
  "description": "Staged Compressor Loops",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "CLGUM",
   "HTGUM",
   "CSCLOOP",
   "REVAL"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "DXHEATING": {
  "name": "DXHEATING",
  "type": "abstract",
  "description": "DX With Heating Capability",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "DXCOOLING",
   "HTGCSC"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "DXCOOLING": {
  "name": "DXCOOLING",
  "type": "abstract",
  "description": "DX Cooling",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "CLGCSC"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CLGCSC": {
  "name": "CLGCSC",
  "type": "abstract",
  "description": "Staged Cooling Controls",
  "multi": true,
  "uses": [],
  "opt_uses": [
   "compressor_cooling_stage_command",
   "compressor_cooling_stage_status"
  ],
  "implements": [
   "CLGUM",
   "HVACOPM",
   "CUM"
  ],
  "applies": [
   "CLGCSCCUR"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CLGCSCCUR": {
  "name": "CLGCSCCUR",
  "type": "abstract",
  "description": "Staged Cooling Electricity Monitoring",
  "multi": false,
  "uses": [
   "compressor_cooling_stage_current_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HTGCSC": {
  "name": "HTGCSC",
  "type": "abstract",
  "description": "Staged Heating Controls",
  "multi": true,
  "uses": [],
  "opt_uses": [
   "compressor_heating_stage_command",
   "compressor_heating_stage_status"
  ],
  "implements": [
   "HTGUM",
   "HVACOPM",
   "CUM"
  ],
  "applies": [
   "HTGCSCCUR"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HTGCSCCUR": {
  "name": "HTGCSCCUR",
  "type": "abstract",
  "description": "Staged Heating Electricity Monitoring",
  "multi": false,
  "uses": [
   "compressor_heating_stage_current_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CSCLOOP": {
  "name": "CSCLOOP",
  "type": "abstract",
  "description": "Staged Compressor Loop",
  "multi": true,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "CSSS"
  ],
  "applies": [
   "SLT",
   "COMPENABLE",
   "DLT",
   "SDLP",
   "CFSS",
   "CSTATS"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CSSS": {
  "name": "CSSS",
  "type": "abstract",
  "description": "Stage Control",
  "multi": true,
  "uses": [],
  "opt_uses": [
   "compressor_stage_command",
   "compressor_stage_status"
  ],
  "implements": [
   "CUM"
  ],
  "applies": [
   "CSCCUR"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CSCCUR": {
  "name": "CSCCUR",
  "type": "abstract",
  "description": "Stage Current Monitoring",
  "multi": false,
  "uses": [
   "compressor_stage_current_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CLGHTGICLOOP": {
  "name": "CLGHTGICLOOP",
  "type": "abstract",
  "description": "Inverter Compressor Loops",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "ICLOOP",
   "REVAL",
   "HTGUM",
   "CLGUM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "ICLOOP": {
  "name": "ICLOOP",
  "type": "abstract",
  "description": "Inverter Compressor Loop",
  "multi": true,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "ICPRC"
  ],
  "applies": [
   "ICFREQ",
   "ICSS"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "ICPRC": {
  "name": "ICPRC",
  "type": "abstract",
  "description": "Inverter Percentage Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "inverter_compressor_speed_percentage_sensor",
   "inverter_compressor_speed_percentage_command"
  ],
  "implements": [
   "CUM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "ICFREQ": {
  "name": "ICFREQ",
  "type": "abstract",
  "description": "Inverter Frequency Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "inverter_compressor_frequency_sensor",
   "inverter_compressor_angularvelocity_sensor"
  ],
  "implements": [
   "CUM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "ICSS": {
  "name": "ICSS",
  "type": "abstract",
  "description": "Inverter Compressor Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "inverter_compressor_run_command",
   "inverter_compressor_run_status"
  ],
  "implements": [
   "CUM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CSTATS": {
  "name": "CSTATS",
  "type": "abstract",
  "description": "Compressor Statistics",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "compressor_run_time_accumulator",
   "compressor_start_counter"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "COMPENABLE": {
  "name": "COMPENABLE",
  "type": "abstract",
  "description": "Compressor Enable Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "compressor_enable_command",
   "compressor_enable_status"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CLGHTGG": {
  "name": "CLGHTGG",
  "type": "abstract",
  "description": "Dual Stage Controls",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "CLGC",
   "HTGC"
  ],
  "applies": [
   "CLGEN",
   "HTGEN"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CLGC": {
  "name": "CLGC",
  "type": "abstract",
  "description": "Staged Cooling Control",
  "multi": true,
  "uses": [],
  "opt_uses": [
   "cooling_stage_command",
   "cooling_stage_status"
  ],
  "implements": [
   "CLGUM",
   "HVACOPM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CLGEN": {
  "name": "CLGEN",
  "type": "abstract",
  "description": "Cooling Enable Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "cooling_enable_command",
   "cooling_enable_status"
  ],
  "implements": [
   "CLGUM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CLGCS": {
  "name": "CLGCS",
  "type": "abstract",
  "description": "Cooling Current Sensor",
  "multi": false,
  "uses": [
   "cooling_current_sensor"
  ],
  "opt_uses": [],
  "implements": [
   "HVACOPM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HTGEN": {
  "name": "HTGEN",
  "type": "abstract",
  "description": "Heating Enable Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "heating_enable_command",
   "heating_enable_status"
  ],
  "implements": [
   "HTGUM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HTGC": {
  "name": "HTGC",
  "type": "abstract",
  "description": "Staged Heating Control",
  "multi": true,
  "uses": [],
  "opt_uses": [
   "heating_stage_command",
   "heating_stage_status"
  ],
  "implements": [
   "HTGUM",
   "HVACOPM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HTGCS": {
  "name": "HTGCS",
  "type": "abstract",
  "description": "Heating Current Sensor",
  "multi": false,
  "uses": [
   "heating_current_sensor"
  ],
  "opt_uses": [],
  "implements": [
   "HVACOPM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SLT": {
  "name": "SLT",
  "type": "abstract",
  "description": "Suction Line Temperature Monitor",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "suction_line_temperature_sensor",
   "compressor_suction_line_temperature_sensor"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "DLT": {
  "name": "DLT",
  "type": "abstract",
  "description": "Discharge Line Temperature Monitoring",
  "multi": false,
  "uses": [
   "compressor_discharge_line_temperature_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SDLP": {
  "name": "SDLP",
  "type": "abstract",
  "description": "Refrigerant Pressure Monitoring",
  "multi": false,
  "uses": [
   "compressor_suction_line_refrigerant_pressure_sensor",
   "compressor_discharge_line_refrigerant_pressure_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CDWG": {
  "name": "CDWG",
  "type": "abstract",
  "description": "Condenser Water",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [],
  "applies": [
   "CDWLOOP",
   "CDWFSS"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CDWFSS": {
  "name": "CDWFSS",
  "type": "abstract",
  "description": "Condenser Water Flow Control",
  "multi": false,
  "uses": [
   "condensing_water_flowrate_setpoint"
  ],
  "opt_uses": [],
  "implements": [
   "CDWFS"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CDWFS": {
  "name": "CDWFS",
  "type": "abstract",
  "description": "Condenser Water Flow Monitoring",
  "multi": false,
  "uses": [
   "condensing_water_flowrate_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CDWLOOP": {
  "name": "CDWLOOP",
  "type": "abstract",
  "description": "Condenser Water Loop",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [],
  "applies": [
   "CDWELT",
   "CDWLTS",
   "CDWV",
   "CDWISOVSS",
   "CDWPRESS",
   "CDWPSS"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CDWELT": {
  "name": "CDWELT",
  "type": "abstract",
  "description": "Condenser Water Temperature Monitoring",
  "multi": false,
  "uses": [
   "condensing_water_entering_temperature_sensor"
  ],
  "opt_uses": [
   "condensing_water_differential_temperature_sensor"
  ],
  "implements": [
   "CDWLT"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CDWLT": {
  "name": "CDWLT",
  "type": "abstract",
  "description": "Condenser Water Leaving Temperature Monitoring",
  "multi": false,
  "uses": [
   "condensing_water_leaving_temperature_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CDWLTS": {
  "name": "CDWLTS",
  "type": "abstract",
  "description": "Condenser Water Leaving Temperature Control",
  "multi": false,
  "uses": [
   "condensing_water_leaving_temperature_setpoint"
  ],
  "opt_uses": [],
  "implements": [
   "CDWLT"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CDWV": {
  "name": "CDWV",
  "type": "abstract",
  "description": "Condenser Water Valve",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "CDWVPRC",
   "CDWVSS"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CDWVPRC": {
  "name": "CDWVPRC",
  "type": "abstract",
  "description": "Condenser Water Valve Percentage Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "condensing_water_valve_percentage_command",
   "condensing_water_valve_percentage_sensor"
  ],
  "implements": [
   "CWVM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CDWVSS": {
  "name": "CDWVSS",
  "type": "abstract",
  "description": "Condenser Water Valve Control",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "CDWVC",
   "CDWVS"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CDWVC": {
  "name": "CDWVC",
  "type": "abstract",
  "description": "Condenser Water Valve Command Control",
  "multi": false,
  "uses": [
   "condensing_water_valve_command"
  ],
  "opt_uses": [],
  "implements": [
   "CWVM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CDWVS": {
  "name": "CDWVS",
  "type": "abstract",
  "description": "Condenser Water Valve Monitoring",
  "multi": false,
  "uses": [
   "condensing_water_valve_status"
  ],
  "opt_uses": [],
  "implements": [
   "CWVM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CDWISOVSS": {
  "name": "CDWISOVSS",
  "type": "abstract",
  "description": "Condenser Water Isolation Valve Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "condensing_water_isolation_valve_run_command",
   "condensing_water_isolation_valve_run_status"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CDWPRESS": {
  "name": "CDWPRESS",
  "type": "abstract",
  "description": "Condenser Water Pressure Monitoring",
  "multi": false,
  "uses": [
   "condensing_water_pressure_sensor"
  ],
  "opt_uses": [
   "condensing_water_pressure_setpoint",
   "condensing_water_differential_pressure_sensor",
   "condensing_water_differential_pressure_setpoint"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CDWPSS": {
  "name": "CDWPSS",
  "type": "abstract",
  "description": "Condenser Water Pump",
  "multi": true,
  "uses": [],
  "opt_uses": [
   "condensing_water_pump_run_command",
   "condensing_water_pump_run_status",
   "condensing_water_pump_run_current_sensor",
   "condensing_water_pump_enable_command",
   "condensing_water_pump_percentage_command"
  ],
  "implements": [
   "CDWPM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CHWG": {
  "name": "CHWG",
  "type": "abstract",
  "description": "Chilled Water",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [],
  "applies": [
   "CHWLOOP",
   "CHWFSS"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CHWFSS": {
  "name": "CHWFSS",
  "type": "abstract",
  "description": "Chilled Water Flow Control",
  "multi": false,
  "uses": [
   "chilled_water_flowrate_setpoint"
  ],
  "opt_uses": [],
  "implements": [
   "CHWFS"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CHWFS": {
  "name": "CHWFS",
  "type": "abstract",
  "description": "Chilled Water Flow Monitoring",
  "multi": false,
  "uses": [
   "chilled_water_flowrate_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CHWLOOP": {
  "name": "CHWLOOP",
  "type": "abstract",
  "description": "Chilled Water Loop",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [],
  "applies": [
   "CHWELT",
   "CHWLTS",
   "CHWV",
   "CHWISOVSS",
   "CHWPSS",
   "CHWPRESS"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CHWELT": {
  "name": "CHWELT",
  "type": "abstract",
  "description": "Chilled Water Temperature Monitoring",
  "multi": false,
  "uses": [
   "chilled_water_entering_temperature_sensor"
  ],
  "opt_uses": [
   "chilled_water_differential_temperature_sensor"
  ],
  "implements": [
   "CHWLT"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CHWLTS": {
  "name": "CHWLTS",
  "type": "abstract",
  "description": "Chilled Water Leaving Temperature Control",
  "multi": false,
  "uses": [
   "chilled_water_leaving_temperature_setpoint"
  ],
  "opt_uses": [],
  "implements": [
   "CHWLT"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CHWLT": {
  "name": "CHWLT",
  "type": "abstract",
  "description": "Chilled Water Leaving Temperature Monitoring",
  "multi": false,
  "uses": [
   "chilled_water_leaving_temperature_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CHWV": {
  "name": "CHWV",
  "type": "abstract",
  "description": "Chilled Water Valve",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "CHWVPRC",
   "CHWVSS"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CHWVPRC": {
  "name": "CHWVPRC",
  "type": "abstract",
  "description": "Chilled Water Valve Percentage Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "chilled_water_valve_percentage_command",
   "chilled_water_valve_percentage_sensor"
  ],
  "implements": [
   "CLGUM",
   "HVACOPM",
   "CHWVM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CHWVSS": {
  "name": "CHWVSS",
  "type": "abstract",
  "description": "Chilled Water Valve Control",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "CHWVC",
   "CHWVS"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CHWVC": {
  "name": "CHWVC",
  "type": "abstract",
  "description": "Chilled Water Valve Command Control",
  "multi": false,
  "uses": [
   "chilled_water_valve_command"
  ],
  "opt_uses": [],
  "implements": [
   "CLGUM",
   "HVACOPM",
   "CHWVM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CHWVS": {
  "name": "CHWVS",
  "type": "abstract",
  "description": "Chilled Water Valve Status",
  "multi": false,
  "uses": [
   "chilled_water_valve_status"
  ],
  "opt_uses": [],
  "implements": [
   "CLGUM",
   "HVACOPM",
   "CHWVM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CHWISOVSS": {
  "name": "CHWISOVSS",
  "type": "abstract",
  "description": "Chilled Water Isolation Valve Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "chilled_water_isolation_valve_run_command",
   "chilled_water_isolation_valve_run_status"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CHWPRESS": {
  "name": "CHWPRESS",
  "type": "abstract",
  "description": "Chilled Water Pressure Monitoring",
  "multi": false,
  "uses": [
   "chilled_water_pressure_sensor"
  ],
  "opt_uses": [
   "chilled_water_pressure_setpoint",
   "chilled_water_differential_pressure_sensor",
   "chilled_water_differential_pressure_setpoint"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CHWPSS": {
  "name": "CHWPSS",
  "type": "abstract",
  "description": "Chilled Water Pump",
  "multi": true,
  "uses": [],
  "opt_uses": [
   "chilled_water_pump_run_command",
   "chilled_water_pump_run_status",
   "chilled_water_pump_run_current_sensor",
   "chilled_water_pump_enable_command",
   "chilled_water_pump_percentage_command"
  ],
  "implements": [
   "CHWPM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HWG": {
  "name": "HWG",
  "type": "abstract",
  "description": "Hot Water",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [],
  "applies": [
   "HOTWATERLOOP",
   "HOTWFSS"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HOTWFSS": {
  "name": "HOTWFSS",
  "type": "abstract",
  "description": "Hot Water Flow Control",
  "multi": false,
  "uses": [
   "hot_water_flowrate_setpoint"
  ],
  "opt_uses": [],
  "implements": [
   "HOTWFS"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HOTWFS": {
  "name": "HOTWFS",
  "type": "abstract",
  "description": "Hot Water Flow Monitoring",
  "multi": false,
  "uses": [
   "hot_water_flowrate_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HOTWATERLOOP": {
  "name": "HOTWATERLOOP",
  "type": "abstract",
  "description": "Hot Water Loop",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [],
  "applies": [
   "HWELTS",
   "HWLTS",
   "HWV",
   "HWISOVSS",
   "HWPSS",
   "HWPRESS"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HWELTS": {
  "name": "HWELTS",
  "type": "abstract",
  "description": "Hot Water Entering Temperature Control",
  "multi": false,
  "uses": [
   "hot_water_entering_temperature_sensor"
  ],
  "opt_uses": [],
  "implements": [
   "HWLT"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HWLTS": {
  "name": "HWLTS",
  "type": "abstract",
  "description": "Hot Water Leaving Temperature Control",
  "multi": false,
  "uses": [
   "hot_water_leaving_temperature_setpoint"
  ],
  "opt_uses": [
   "low_limit_hot_water_leaving_temperature_setpoint",
   "high_limit_hot_water_leaving_temperature_setpoint"
  ],
  "implements": [
   "HWLT"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HWLT": {
  "name": "HWLT",
  "type": "abstract",
  "description": "Hot Water Leaving Temperature Monitoring",
  "multi": false,
  "uses": [
   "hot_water_leaving_temperature_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HWV": {
  "name": "HWV",
  "type": "abstract",
  "description": "Hot Water Valve",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "HWVPRC",
   "HWVSS"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HWVPRC": {
  "name": "HWVPRC",
  "type": "abstract",
  "description": "Hot Water Valve Percentage Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "hot_water_valve_percentage_command",
   "hot_water_valve_percentage_sensor"
  ],
  "implements": [
   "HTGUM",
   "HVACOPM",
   "HWVM"
  ],
  "applies": [
   "HWVFLOATING"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HWVFLOATING": {
  "name": "HWVFLOATING",
  "type": "abstract",
  "description": "Hot Water Valve Floating Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "hot_water_valve_open_command",
   "hot_water_valve_closed_command"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HWVSS": {
  "name": "HWVSS",
  "type": "abstract",
  "description": "Hot Water Valve Control",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "HWVC",
   "HWVS"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HWVC": {
  "name": "HWVC",
  "type": "abstract",
  "description": "Hot Water Valve Command Control",
  "multi": false,
  "uses": [
   "hot_water_valve_command"
  ],
  "opt_uses": [],
  "implements": [
   "HTGUM",
   "HVACOPM",
   "HWVM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HWVS": {
  "name": "HWVS",
  "type": "abstract",
  "description": "Hot Water Valve Monitoring",
  "multi": false,
  "uses": [
   "hot_water_valve_status"
  ],
  "opt_uses": [],
  "implements": [
   "HTGUM",
   "HVACOPM",
   "HWVM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HWISOVSS": {
  "name": "HWISOVSS",
  "type": "abstract",
  "description": "Hot Water Isolation Valve Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "hot_water_isolation_valve_run_command",
   "hot_water_isolation_valve_run_status"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HWPSS": {
  "name": "HWPSS",
  "type": "abstract",
  "description": "Hot Water Pump",
  "multi": true,
  "uses": [],
  "opt_uses": [
   "hot_water_pump_run_command",
   "hot_water_pump_run_status",
   "hot_water_pump_run_current_sensor",
   "hot_water_pump_enable_command",
   "hot_water_pump_percentage_command"
  ],
  "implements": [
   "HWPM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HWPRESS": {
  "name": "HWPRESS",
  "type": "abstract",
  "description": "Hot Water Pressure Control",
  "multi": false,
  "uses": [
   "hot_water_pressure_sensor"
  ],
  "opt_uses": [
   "hot_water_pressure_setpoint",
   "hot_water_differential_pressure_sensor",
   "hot_water_pressure_differential_setpoint"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "ECONOMIZER": {
  "name": "ECONOMIZER",
  "type": "abstract",
  "description": "Economizer Control",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "ECNS",
   "ECNMODE"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "ECNMODE": {
  "name": "ECNMODE",
  "type": "abstract",
  "description": "Economizer Mode Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "low_limit_economizer_output_percentage_command",
   "economizer_mode",
   "economizer_temperature_setpoint",
   "economizer_specificenthalpy_setpoint",
   "economizer_season_mode"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "ECNS": {
  "name": "ECNS",
  "type": "abstract",
  "description": "Economizer Monitoring",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "economizer_output_percentage_sensor",
   "economizer_status"
  ],
  "implements": [
   "ECNUM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "PREHEAT": {
  "name": "PREHEAT",
  "type": "abstract",
  "description": "Preheat Control",
  "multi": false,
  "uses": [
   "preheat_percentage_command"
  ],
  "opt_uses": [
   "preheat_enable_command",
   "preheat_coil_air_leaving_temperature_sensor"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "GH": {
  "name": "GH",
  "type": "abstract",
  "description": "Gas Heat Controls",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "GHC",
   "GHS",
   "GHPRC",
   "GHPRS"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "GHPRC": {
  "name": "GHPRC",
  "type": "abstract",
  "description": "Gas Valve Percentage Control",
  "multi": true,
  "uses": [
   "gas_heater_percentage_command"
  ],
  "opt_uses": [],
  "implements": [
   "HTGUM",
   "HVACOPM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "GHPRS": {
  "name": "GHPRS",
  "type": "abstract",
  "description": "Gas Valve Percentage Monitoring",
  "multi": true,
  "uses": [
   "gas_heater_percentage_sensor"
  ],
  "opt_uses": [],
  "implements": [
   "HTGUM",
   "HVACOPM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "GHC": {
  "name": "GHC",
  "type": "abstract",
  "description": "Staged Gas Heating Control",
  "multi": true,
  "uses": [
   "gas_heater_stage_command"
  ],
  "opt_uses": [
   "gas_heater_stage_enable_command"
  ],
  "implements": [
   "HTGUM",
   "HVACOPM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "GHS": {
  "name": "GHS",
  "type": "abstract",
  "description": "Staged Gas Heating Monitoring",
  "multi": true,
  "uses": [
   "gas_heater_stage_status"
  ],
  "opt_uses": [],
  "implements": [
   "HTGUM",
   "HVACOPM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "EH": {
  "name": "EH",
  "type": "abstract",
  "description": "Electric Heat Controls",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "EHC",
   "EHS",
   "EHPRC",
   "EHPRS",
   "EHCURR"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "EHC": {
  "name": "EHC",
  "type": "abstract",
  "description": "Staged Electric Heating Control",
  "multi": true,
  "uses": [
   "electric_heater_stage_command"
  ],
  "opt_uses": [
   "electric_heater_stage_enable_command"
  ],
  "implements": [
   "HTGUM",
   "HVACOPM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "EHS": {
  "name": "EHS",
  "type": "abstract",
  "description": "Staged Electric Heating Monitoring",
  "multi": true,
  "uses": [
   "electric_heater_stage_status"
  ],
  "opt_uses": [],
  "implements": [
   "HTGUM",
   "HVACOPM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "EHPRC": {
  "name": "EHPRC",
  "type": "abstract",
  "description": "Electric Heat Percentage Control",
  "multi": true,
  "uses": [
   "electric_heater_percentage_command"
  ],
  "opt_uses": [
   "electric_heater_enable_command"
  ],
  "implements": [
   "HTGUM",
   "HVACOPM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "EHPRS": {
  "name": "EHPRS",
  "type": "abstract",
  "description": "Electric Heat Percentage Monitoring",
  "multi": true,
  "uses": [
   "electric_heater_percentage_sensor"
  ],
  "opt_uses": [],
  "implements": [
   "HTGUM",
   "HVACOPM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "EHCURR": {
  "name": "EHCURR",
  "type": "abstract",
  "description": "Electric Heater Power Monitoring",
  "multi": true,
  "uses": [
   "electric_heater_power_sensor"
  ],
  "opt_uses": [],
  "implements": [
   "HTGUM",
   "HVACOPM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SH": {
  "name": "SH",
  "type": "abstract",
  "description": "Supplemental Heat Control",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "SHC",
   "SHPRC",
   "SHPRS"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SHC": {
  "name": "SHC",
  "type": "abstract",
  "description": "Supplemental Heating Control",
  "multi": false,
  "uses": [
   "supplemental_heater_command"
  ],
  "opt_uses": [
   "supplemental_heater_enable_command"
  ],
  "implements": [
   "SUPPHTGUM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SHPRC": {
  "name": "SHPRC",
  "type": "abstract",
  "description": "Supplemental Heating Percentage Control",
  "multi": false,
  "uses": [
   "supplemental_heater_percentage_command"
  ],
  "opt_uses": [],
  "implements": [
   "SUPPHTGUM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SHPRS": {
  "name": "SHPRS",
  "type": "abstract",
  "description": "Supplemental Heating Percentage Monitoring",
  "multi": false,
  "uses": [
   "supplemental_heater_percentage_sensor"
  ],
  "opt_uses": [],
  "implements": [
   "SUPPHTGUM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "BOILERPUMP": {
  "name": "BOILERPUMP",
  "type": "abstract",
  "description": "Pumps part of the Boiler system.",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "domestic_hot_water_pump_run_status",
   "central_heating_water_pump_run_status"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HWTEMPSRS": {
  "name": "HWTEMPSRS",
  "type": "abstract",
  "description": "Header Water Temperature Monitoring",
  "multi": false,
  "uses": [
   "header_water_entering_temperature_sensor",
   "header_water_leaving_temperature_sensor"
  ],
  "opt_uses": [
   "header_water_leaving_temperature_setpoint"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HCD": {
  "name": "HCD",
  "type": "abstract",
  "description": "Dual Demand Monitoring (PIDs)",
  "multi": false,
  "uses": [
   "controller_heating_output_percentage_label",
   "controller_cooling_output_percentage_label"
  ],
  "opt_uses": [],
  "implements": [
   "HTGUM",
   "HVACOPM",
   "CLGUM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HCCR": {
  "name": "HCCR",
  "type": "abstract",
  "description": "Heating Cooling Capacity and Request",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [],
  "applies": [
   "HCC",
   "HCR"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HCC": {
  "name": "HCC",
  "type": "abstract",
  "description": "Heating/Cooling Capacity",
  "multi": false,
  "uses": [
   "heating_output_percentage_capacity",
   "cooling_output_percentage_capacity"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HCR": {
  "name": "HCR",
  "type": "abstract",
  "description": "Heating/Cooling Request",
  "multi": false,
  "uses": [
   "heating_request_percentage_sensor",
   "cooling_request_percentage_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "ZCO2SS": {
  "name": "ZCO2SS",
  "type": "abstract",
  "description": "Zone CO2 Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "zone_air_co2_concentration_setpoint",
   "high_limit_zone_air_co2_concentration_setpoint",
   "low_limit_zone_air_co2_concentration_setpoint",
   "min_ventilation_deadband_co2_concentration_setpoint"
  ],
  "implements": [
   "ZCO2S",
   "ZCO2C"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "ZCO2S": {
  "name": "ZCO2S",
  "type": "abstract",
  "description": "Zone Air CO2 Monitoring",
  "multi": false,
  "uses": [
   "zone_air_co2_concentration_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "RCO2SS": {
  "name": "RCO2SS",
  "type": "abstract",
  "description": "Return Air CO2 Control",
  "multi": false,
  "uses": [
   "return_air_co2_concentration_setpoint"
  ],
  "opt_uses": [],
  "implements": [
   "RCO2S"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "RCO2S": {
  "name": "RCO2S",
  "type": "abstract",
  "description": "Return Air CO2 Monitoring",
  "multi": false,
  "uses": [
   "return_air_co2_concentration_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "PLOOP": {
  "name": "PLOOP",
  "type": "abstract",
  "description": "Primary Loop",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [],
  "applies": [
   "PLELTS",
   "PLETS",
   "PLVSS",
   "PLISOVSS",
   "PLPC",
   "PLPRESS",
   "PLFLOW",
   "LEADLAG"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "PLELTS": {
  "name": "PLELTS",
  "type": "abstract",
  "description": "Primary Loop Temperature Monitoring",
  "multi": false,
  "uses": [
   "primary_loop_leaving_temperature_sensor"
  ],
  "opt_uses": [
   "primary_loop_differential_temperature_sensor",
   "primary_loop_leaving_temperature_setpoint"
  ],
  "implements": [
   "PLET"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "PLETS": {
  "name": "PLETS",
  "type": "abstract",
  "description": "Primary Loop Entering Temperature Control",
  "multi": false,
  "uses": [
   "primary_loop_entering_temperature_setpoint"
  ],
  "opt_uses": [
   "high_limit_primary_loop_leaving_temperature_setpoint",
   "low_limit_primary_loop_leaving_temperature_setpoint",
   "high_limit_primary_loop_entering_temperature_setpoint",
   "low_limit_primary_loop_entering_temperature_setpoint"
  ],
  "implements": [
   "PLET"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "PLET": {
  "name": "PLET",
  "type": "abstract",
  "description": "Primary Loop Entering Temperature Monitoring",
  "multi": false,
  "uses": [
   "primary_loop_entering_temperature_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "PLVSS": {
  "name": "PLVSS",
  "type": "abstract",
  "description": "Primary Loop Valve Control",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "PLVC",
   "PLVS"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "PLVC": {
  "name": "PLVC",
  "type": "abstract",
  "description": "Primary Loop Valve Command Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "primary_loop_valve_command",
   "primary_loop_valve_percentage_command"
  ],
  "implements": [
   "PLVM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "PLVS": {
  "name": "PLVS",
  "type": "abstract",
  "description": "Primary Loop Valve Monitoring",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "primary_loop_valve_status",
   "primary_loop_valve_percentage_sensor"
  ],
  "implements": [
   "PLVM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "PLISOVSS": {
  "name": "PLISOVSS",
  "type": "abstract",
  "description": "Primary Isolation Valve Command/Status",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "primary_loop_isolation_valve_run_command",
   "primary_loop_isolation_valve_run_status"
  ],
  "implements": [
   "PLVM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "PLPC": {
  "name": "PLPC",
  "type": "abstract",
  "description": "Primary Loop Multi Pump Control",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "PLPM",
   "PLPSS"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "PLPSS": {
  "name": "PLPSS",
  "type": "abstract",
  "description": "Primary Loop Pump Control",
  "multi": true,
  "uses": [],
  "opt_uses": [
   "primary_loop_pump_run_command",
   "primary_loop_pump_run_status",
   "primary_loop_pump_run_current_sensor",
   "primary_loop_pump_percentage_command",
   "primary_loop_pump_enable_command"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "PLPRESS": {
  "name": "PLPRESS",
  "type": "abstract",
  "description": "Primary Loop Differential Pressure Monitoring",
  "multi": false,
  "uses": [
   "primary_loop_differential_pressure_sensor"
  ],
  "opt_uses": [
   "primary_loop_pressure_setpoint",
   "primary_loop_pressure_sensor",
   "primary_loop_leaving_pressure_sensor",
   "primary_loop_differential_pressure_setpoint"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "PLFLOW": {
  "name": "PLFLOW",
  "type": "abstract",
  "description": "Primary Loop Flow Monitoring",
  "multi": false,
  "uses": [
   "primary_loop_water_flowrate_sensor"
  ],
  "opt_uses": [
   "primary_loop_water_flowrate_setpoint"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "LEADLAG": {
  "name": "LEADLAG",
  "type": "abstract",
  "description": "Lead/Lag Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "leadlag_label",
   "leadlag_reversing_command"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SLOOP": {
  "name": "SLOOP",
  "type": "abstract",
  "description": "Secondary Loop",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [],
  "applies": [
   "SLETS",
   "SLELTS",
   "SLVSS",
   "SLISOVSS",
   "SLPC",
   "SLPRESS",
   "SLFLOW"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SLELTS": {
  "name": "SLELTS",
  "type": "abstract",
  "description": "Secondary Loop Temperature Monitoring",
  "multi": false,
  "uses": [
   "secondary_loop_leaving_temperature_sensor"
  ],
  "opt_uses": [
   "secondary_loop_differential_temperature_sensor",
   "secondary_loop_leaving_temperature_setpoint"
  ],
  "implements": [
   "SLET"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SLETS": {
  "name": "SLETS",
  "type": "abstract",
  "description": "Secondary Loop Entering Temperature Control",
  "multi": false,
  "uses": [
   "secondary_loop_entering_temperature_setpoint"
  ],
  "opt_uses": [
   "high_limit_secondary_loop_leaving_temperature_setpoint",
   "low_limit_secondary_loop_leaving_temperature_setpoint",
   "high_limit_secondary_loop_entering_temperature_setpoint",
   "low_limit_secondary_loop_entering_temperature_setpoint"
  ],
  "implements": [
   "SLET"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SLET": {
  "name": "SLET",
  "type": "abstract",
  "description": "Secondary Loop Entering Temperature Monitoring",
  "multi": false,
  "uses": [
   "secondary_loop_entering_temperature_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SLVSS": {
  "name": "SLVSS",
  "type": "abstract",
  "description": "Secondary Loop Valve Control",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "SLVC",
   "SLVS"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SLVC": {
  "name": "SLVC",
  "type": "abstract",
  "description": "Secondary Loop Valve Command Control",
  "multi": false,
  "uses": [
   "secondary_loop_valve_command",
   "secondary_loop_valve_percentage_command"
  ],
  "opt_uses": [],
  "implements": [
   "SLVM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SLVS": {
  "name": "SLVS",
  "type": "abstract",
  "description": "Secondary Loop Valve Monitoring",
  "multi": false,
  "uses": [
   "secondary_loop_valve_status",
   "secondary_loop_valve_percentage_sensor"
  ],
  "opt_uses": [],
  "implements": [
   "SLVM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SLISOVSS": {
  "name": "SLISOVSS",
  "type": "abstract",
  "description": "Secondary Loop Isolation Valve Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "secondary_loop_isolation_valve_run_command",
   "secondary_loop_isolation_valve_run_status"
  ],
  "implements": [
   "SLVM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SLPC": {
  "name": "SLPC",
  "type": "abstract",
  "description": "Secondary Loop Multi Pump Control",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "SLPM",
   "SLMPSS"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SLMPSS": {
  "name": "SLMPSS",
  "type": "abstract",
  "description": "Secondary Loop Pump Control",
  "multi": true,
  "uses": [],
  "opt_uses": [
   "secondary_loop_pump_run_command",
   "secondary_loop_pump_run_status",
   "secondary_loop_pump_run_current_sensor",
   "secondary_loop_pump_percentage_command",
   "secondary_loop_pump_enable_command"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SLPRESS": {
  "name": "SLPRESS",
  "type": "abstract",
  "description": "Secondary Loop Differential Pressure Monitoring",
  "multi": false,
  "uses": [
   "secondary_loop_differential_pressure_sensor"
  ],
  "opt_uses": [
   "secondary_loop_pressure_setpoint",
   "secondary_loop_pressure_sensor",
   "secondary_loop_leaving_pressure_sensor",
   "secondary_loop_differential_pressure_setpoint"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SLFLOW": {
  "name": "SLFLOW",
  "type": "abstract",
  "description": "Secondary Loop Flow Monitoring",
  "multi": false,
  "uses": [
   "secondary_loop_water_flowrate_sensor"
  ],
  "opt_uses": [
   "secondary_loop_water_flowrate_setpoint"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "WATERTREATGROUP": {
  "name": "WATERTREATGROUP",
  "type": "abstract",
  "description": "Water Treatment",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [],
  "applies": [
   "WLTSS",
   "WPSS",
   "WLPS",
   "WFM"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "WLTS": {
  "name": "WLTS",
  "type": "abstract",
  "description": "Water Leaving Temperature Monitoring",
  "multi": false,
  "uses": [
   "leaving_water_temperature_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [
   "WETS"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "WETS": {
  "name": "WETS",
  "type": "abstract",
  "description": "Water Entering Temperature Monitoring",
  "multi": false,
  "uses": [
   "entering_water_temperature_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "WLTSS": {
  "name": "WLTSS",
  "type": "abstract",
  "description": "Water Leaving Temperature Control",
  "multi": false,
  "uses": [
   "cooling_water_leaving_temperature_setpoint",
   "heating_water_leaving_temperature_setpoint"
  ],
  "opt_uses": [],
  "implements": [
   "WLTS",
   "RCVWLTS"
  ],
  "applies": [
   "EFFWLTSS"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "EFFWLTSS": {
  "name": "EFFWLTSS",
  "type": "abstract",
  "description": "Effective Water Leaving Temperature Control",
  "multi": false,
  "uses": [
   "effective_water_leaving_temperature_setpoint"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "RCVWLTS": {
  "name": "RCVWLTS",
  "type": "abstract",
  "description": "Recovery Water Leaving Temperature Monitoring",
  "multi": true,
  "uses": [
   "leaving_recovery_water_temperature_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [
   "RCVWETS"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "RCVWETS": {
  "name": "RCVWETS",
  "type": "abstract",
  "description": "Recovery Water Entering Temperature Monitoring",
  "multi": false,
  "uses": [
   "entering_recovery_water_temperature_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "WLPS": {
  "name": "WLPS",
  "type": "abstract",
  "description": "Pressure Monitoring",
  "multi": false,
  "uses": [
   "leaving_water_pressure_sensor"
  ],
  "opt_uses": [
   "differential_water_pressure_sensor",
   "differential_water_pressure_setpoint",
   "entering_water_pressure_sensor",
   "leaving_water_pressure_setpoint"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "WPSS": {
  "name": "WPSS",
  "type": "abstract",
  "description": "Water Pump Control",
  "multi": true,
  "uses": [],
  "opt_uses": [
   "water_pump_run_command",
   "water_pump_run_status"
  ],
  "implements": [],
  "applies": [
   "RWPSS"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "RWPSS": {
  "name": "RWPSS",
  "type": "abstract",
  "description": "Recovery Water Pump Control",
  "multi": true,
  "uses": [],
  "opt_uses": [
   "recovery_water_pump_run_command",
   "recovery_water_pump_run_status"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "WFM": {
  "name": "WFM",
  "type": "abstract",
  "description": "Water Filter Monitoring",
  "multi": true,
  "uses": [
   "water_filter_alarm"
  ],
  "opt_uses": [
   "filter_differential_water_pressure_sensor"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "TANKMONITORING": {
  "name": "TANKMONITORING",
  "type": "abstract",
  "description": "Tank Level Monitoring",
  "multi": true,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "VIOLATION"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HUMSSG": {
  "name": "HUMSSG",
  "type": "abstract",
  "description": "Air Humidity",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [],
  "applies": [
   "DAHSS",
   "RAHSS",
   "ZHSS"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "DAHSS": {
  "name": "DAHSS",
  "type": "abstract",
  "description": "Discharge Air Humidity Control",
  "multi": false,
  "uses": [
   "discharge_air_humidity_sensor"
  ],
  "opt_uses": [
   "discharge_air_humidity_setpoint",
   "cooling_coil_air_humidity_sensor",
   "heating_coil_air_humidity_sensor"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "RAHSS": {
  "name": "RAHSS",
  "type": "abstract",
  "description": "Return Air Humidity Control",
  "multi": false,
  "uses": [
   "return_air_humidity_sensor"
  ],
  "opt_uses": [
   "return_air_humidity_setpoint",
   "return_air_dehumidification_setpoint"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "ZHSS": {
  "name": "ZHSS",
  "type": "abstract",
  "description": "Zone Humidity Control",
  "multi": false,
  "uses": [
   "zone_air_humidity_sensor"
  ],
  "opt_uses": [
   "zone_air_humidity_setpoint",
   "zone_air_dehumidification_setpoint",
   "low_limit_zone_air_humidity_setpoint",
   "high_limit_zone_air_humidity_setpoint"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HUMC": {
  "name": "HUMC",
  "type": "abstract",
  "description": "Humidifier Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "humidifier_run_command",
   "humidifier_run_percentage_command",
   "humidifier_enable_percentage_command",
   "humidifier_run_percentage_sensor",
   "humidifier_enable_command",
   "humidifier_run_status",
   "humidifier_outside_air_temperature_enable_setpoint"
  ],
  "implements": [
   "HMDM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HUMTANK": {
  "name": "HUMTANK",
  "type": "abstract",
  "description": "Humidifier Tank",
  "multi": true,
  "uses": [],
  "opt_uses": [
   "water_temperature_sensor",
   "flue_temperature_sensor",
   "water_percentage_sensor",
   "foam_detection_percentage_sensor",
   "fan_frequency_sensor",
   "demand_percentage_sensor"
  ],
  "implements": [],
  "applies": [
   "STATS"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HUMOUT": {
  "name": "HUMOUT",
  "type": "abstract",
  "description": "Humidifier Mass Flowrate Monitoring",
  "multi": false,
  "uses": [
   "humidifier_massflowrate_sensor"
  ],
  "opt_uses": [
   "leaving_water_valve_status",
   "entering_water_valve_status",
   "steam_valve_status",
   "ventilation_fan_status"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "DHUMC": {
  "name": "DHUMC",
  "type": "abstract",
  "description": "Dehumidifier Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "dehumidifier_run_command",
   "dehumidifier_run_percentage_command",
   "dehumidifier_enable_command",
   "dehumidifier_run_status"
  ],
  "implements": [
   "DHMDM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "RCTTSS": {
  "name": "RCTTSS",
  "type": "abstract",
  "description": "Reactivation Air Temperature Control",
  "multi": false,
  "uses": [
   "reactivation_air_temperature_setpoint"
  ],
  "opt_uses": [],
  "implements": [
   "RCTTS"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "RCTTS": {
  "name": "RCTTS",
  "type": "abstract",
  "description": "Reactivation Temperature Monitoring",
  "multi": false,
  "uses": [
   "reactivation_air_temperature_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "DDAFC": {
  "name": "DDAFC",
  "type": "abstract",
  "description": "Dual Duct Airflow Control",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "DAFC",
   "CDAFC",
   "HDAFC"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CDAFC": {
  "name": "CDAFC",
  "type": "abstract",
  "description": "Cold Duct Airflow Control",
  "multi": false,
  "uses": [
   "cold_deck_air_flowrate_sensor",
   "cold_deck_air_flowrate_setpoint"
  ],
  "opt_uses": [
   "cold_deck_air_pressure_sensor",
   "max_occupied_cold_air_flowrate_setpoint",
   "min_occupied_cold_air_flowrate_setpoint",
   "max_unoccupied_cold_air_flowrate_setpoint",
   "min_unoccupied_cold_air_flowrate_setpoint"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HDAFC": {
  "name": "HDAFC",
  "type": "abstract",
  "description": "Hot Duct Airflow Control",
  "multi": false,
  "uses": [
   "hot_deck_air_flowrate_sensor",
   "hot_deck_air_flowrate_setpoint"
  ],
  "opt_uses": [
   "hot_deck_air_pressure_sensor",
   "max_occupied_hot_air_flowrate_setpoint",
   "min_occupied_hot_air_flowrate_setpoint",
   "max_unoccupied_hot_air_flowrate_setpoint",
   "min_unoccupied_hot_air_flowrate_setpoint"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "DDAH": {
  "name": "DDAH",
  "type": "abstract",
  "description": "Dual Duct Air Handler",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "HDS",
   "CDS"
  ],
  "applies": [
   "CDSP",
   "HDSP"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CDS": {
  "name": "CDS",
  "type": "abstract",
  "description": "Cold Deck Discharge Temperature Control",
  "multi": false,
  "uses": [
   "cold_deck_discharge_air_temperature_sensor",
   "cold_deck_discharge_air_temperature_setpoint"
  ],
  "opt_uses": [
   "cold_deck_zone_inlet_discharge_air_temperature_sensor"
  ],
  "implements": [
   "CHWVM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HDS": {
  "name": "HDS",
  "type": "abstract",
  "description": "Hot Deck Discharge Temperature Control",
  "multi": false,
  "uses": [
   "hot_deck_discharge_air_temperature_sensor",
   "hot_deck_discharge_air_temperature_setpoint"
  ],
  "opt_uses": [
   "hot_deck_zone_inlet_discharge_air_temperature_sensor"
  ],
  "implements": [
   "HWVM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CDSP": {
  "name": "CDSP",
  "type": "abstract",
  "description": "Cold Deck Discharge Pressure Control",
  "multi": false,
  "uses": [
   "cold_deck_discharge_air_pressure_sensor",
   "cold_deck_discharge_air_pressure_setpoint"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HDSP": {
  "name": "HDSP",
  "type": "abstract",
  "description": "Hot Deck Discharge Pressure Control",
  "multi": false,
  "uses": [
   "hot_deck_discharge_air_pressure_sensor",
   "hot_deck_discharge_air_pressure_setpoint"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SVC": {
  "name": "SVC",
  "type": "abstract",
  "description": "Steam Valve Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "steam_valve_percentage_command",
   "steam_valve_percentage_sensor"
  ],
  "implements": [
   "HTGUM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HWHG": {
  "name": "HWHG",
  "type": "abstract",
  "description": "Heat Wheel",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [],
  "applies": [
   "HWHSS",
   "HWHPRC",
   "HWHRPM",
   "HWHELTS"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HWHSS": {
  "name": "HWHSS",
  "type": "abstract",
  "description": "Heat Wheel Control",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "HWHC",
   "HWHS"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HWHC": {
  "name": "HWHC",
  "type": "abstract",
  "description": "Heat Wheel Command Control",
  "multi": false,
  "uses": [
   "heat_wheel_command"
  ],
  "opt_uses": [],
  "implements": [
   "HWHUM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HWHS": {
  "name": "HWHS",
  "type": "abstract",
  "description": "Heat Wheel Monitoring",
  "multi": false,
  "uses": [
   "heat_wheel_status"
  ],
  "opt_uses": [],
  "implements": [
   "HWHUM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HWHPRC": {
  "name": "HWHPRC",
  "type": "abstract",
  "description": "Heat Wheel Percentage Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "heat_wheel_percentage_command",
   "heat_wheel_percentage_sensor"
  ],
  "implements": [
   "HWHUM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HWHRPM": {
  "name": "HWHRPM",
  "type": "abstract",
  "description": "Heat Wheel Revolutions Monitoring",
  "multi": false,
  "uses": [
   "heat_wheel_angularvelocity_sensor"
  ],
  "opt_uses": [],
  "implements": [
   "HWHUM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HWHELTS": {
  "name": "HWHELTS",
  "type": "abstract",
  "description": "Heat Wheel Air Temperature Control",
  "multi": false,
  "uses": [
   "heat_wheel_leaving_air_temperature_sensor"
  ],
  "opt_uses": [
   "heat_wheel_air_entering_temperature_sensor",
   "low_limit_heat_wheel_leaving_air_temperature_setpoint",
   "heat_wheel_leaving_air_temperature_setpoint"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SUMP": {
  "name": "SUMP",
  "type": "abstract",
  "description": "Sump",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [],
  "applies": [
   "SUMPHTG",
   "SUMPTEMP",
   "SUMPFILL"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SUMPTEMP": {
  "name": "SUMPTEMP",
  "type": "abstract",
  "description": "Sump Temperature Control",
  "multi": false,
  "uses": [
   "sump_temperature_sensor"
  ],
  "opt_uses": [
   "sump_temperature_setpoint"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SUMPHTG": {
  "name": "SUMPHTG",
  "type": "abstract",
  "description": "Sump Heating Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "sump_heating_command",
   "sump_heating_status",
   "sump_heating_percentage_sensor",
   "sump_heating_current_sensor"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SUMPFILL": {
  "name": "SUMPFILL",
  "type": "abstract",
  "description": "Sump Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "makeup_water_valve_percentage_command",
   "sump_level_sensor",
   "sump_level_setpoint"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "BYPASSVALVE": {
  "name": "BYPASSVALVE",
  "type": "abstract",
  "description": "Bypass Valve",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [],
  "applies": [
   "BYPASSVALVESS",
   "BYPASSVALVEPRC"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "BYPASSVALVESS": {
  "name": "BYPASSVALVESS",
  "type": "abstract",
  "description": "Bypass Valve Control",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "BYPASSVALVES",
   "BYPASSVALVEC"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "BYPASSVALVES": {
  "name": "BYPASSVALVES",
  "type": "abstract",
  "description": "Bypass Valve Monitoring",
  "multi": false,
  "uses": [
   "bypass_valve_status"
  ],
  "opt_uses": [],
  "implements": [
   "BVM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "BYPASSVALVEC": {
  "name": "BYPASSVALVEC",
  "type": "abstract",
  "description": "Bypass Valve Command Control",
  "multi": false,
  "uses": [
   "bypass_valve_command"
  ],
  "opt_uses": [],
  "implements": [
   "BVM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "BYPASSVALVEPRC": {
  "name": "BYPASSVALVEPRC",
  "type": "abstract",
  "description": "Bypass Valve Percentage Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "bypass_valve_percentage_command",
   "bypass_valve_percentage_sensor"
  ],
  "implements": [
   "BVM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "PURGE": {
  "name": "PURGE",
  "type": "abstract",
  "description": "Purge Monitoring",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "purge_status",
   "purge_compressor_status",
   "purge_liquid_valve_status"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "OILPUMP": {
  "name": "OILPUMP",
  "type": "abstract",
  "description": "Oil Pump Monitoring",
  "multi": false,
  "uses": [
   "oil_pump_status"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "TTSS": {
  "name": "TTSS",
  "type": "abstract",
  "description": "Tank Temperature Control",
  "multi": false,
  "uses": [
   "tank_water_temperature_setpoint"
  ],
  "opt_uses": [],
  "implements": [
   "TTS"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "TTS": {
  "name": "TTS",
  "type": "abstract",
  "description": "Tank Temperature Monitoring",
  "multi": false,
  "uses": [
   "tank_water_temperature_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SLAB": {
  "name": "SLAB",
  "type": "abstract",
  "description": "Slab",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "SLABTC",
   "MSLABTC",
   "SLABMSTP",
   "STORMIDLES"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SLABTC": {
  "name": "SLABTC",
  "type": "abstract",
  "description": "Coldest Slab Temperature Control",
  "multi": false,
  "uses": [
   "min_slab_temperature_sensor",
   "min_slab_temperature_setpoint"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "MSLABTC": {
  "name": "MSLABTC",
  "type": "abstract",
  "description": "Multi Slab Temperature Control",
  "multi": true,
  "uses": [
   "slab_temperature_sensor"
  ],
  "opt_uses": [
   "slab_water_detection_status",
   "slab_temperature_setpoint"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SLABMSTP": {
  "name": "SLABMSTP",
  "type": "abstract",
  "description": "Melting Temperature Control",
  "multi": false,
  "uses": [
   "defrost_temperature_setpoint"
  ],
  "opt_uses": [
   "idle_temperature_setpoint",
   "storm_temperature_setpoint"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "STORMIDLES": {
  "name": "STORMIDLES",
  "type": "abstract",
  "description": "Snow Melt Operation Status Monitoring",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "storm_enable_status",
   "idle_enable_status"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SMMODE": {
  "name": "SMMODE",
  "type": "abstract",
  "description": "Snow Melt Mode Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "hot_season_release_status",
   "cold_season_release_status"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "GUIDEVANES": {
  "name": "GUIDEVANES",
  "type": "abstract",
  "description": "Inlet Guide Vanes Position Monitoring",
  "multi": true,
  "uses": [
   "inlet_guidevane_percentage_sensor",
   "inlet_guidevane_angle_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "RADIATOR": {
  "name": "RADIATOR",
  "type": "abstract",
  "description": "Radiator",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "RADT",
   "HTGC",
   "HTGEN",
   "HTGCS"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "RADT": {
  "name": "RADT",
  "type": "abstract",
  "description": "Radiator Temperature Monitoring",
  "multi": false,
  "uses": [
   "radiator_temperature_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SOURCE": {
  "name": "SOURCE",
  "type": "abstract",
  "description": "Source Control",
  "multi": false,
  "uses": [
   "source_mode"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "EV": {
  "name": "EV",
  "type": "abstract",
  "description": "Expansion Valve Monitoring",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "expansion_valve_percentage_sensor",
   "expansion_valve_status"
  ],
  "implements": [
   "EXP"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "IEV": {
  "name": "IEV",
  "type": "abstract",
  "description": "Inverter Expansion Valve  Monitoring",
  "multi": true,
  "uses": [
   "inverter_expansion_valve_percentage_sensor"
  ],
  "opt_uses": [],
  "implements": [
   "EXP"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SUBCOOLING": {
  "name": "SUBCOOLING",
  "type": "abstract",
  "description": "Subcooling Monitoring",
  "multi": false,
  "uses": [
   "subcooling_expansion_valve_percentage_sensor",
   "subcooling_entering_temperature_sensor",
   "subcooling_leaving_temperature_sensor"
  ],
  "opt_uses": [
   "defrost_liquid_line_temperature_sensor"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HGLT": {
  "name": "HGLT",
  "type": "abstract",
  "description": "Hot Gas Line Temperature Monitoring",
  "multi": true,
  "uses": [
   "inverter_compressor_hot_gas_line_temperature_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HXGLLT": {
  "name": "HXGLLT",
  "type": "abstract",
  "description": "Heat Exchanger Gas, Liquid Line Temperature Monitoring",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "secondary_heat_exchange_gas_line_temperature_sensor",
   "primary_heat_exchange_gas_line_temperature_sensor",
   "secondary_heat_exchange_liquid_line_temperature_sensor",
   "primary_heat_exchange_liquid_line_temperature_sensor"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "GLT": {
  "name": "GLT",
  "type": "abstract",
  "description": "Gas Line Temperature Monitoring",
  "multi": false,
  "uses": [
   "gas_line_temperature_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "LLT": {
  "name": "LLT",
  "type": "abstract",
  "description": "Liquid Line Temperature Monitoring",
  "multi": false,
  "uses": [
   "liquid_line_temperature_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "DM": {
  "name": "DM",
  "type": "abstract",
  "description": "Defrost Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "defrost_mode",
   "defrost_status"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "ORM": {
  "name": "ORM",
  "type": "abstract",
  "description": "Oil Return Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "oil_return_mode",
   "oil_return_status"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "ECPS": {
  "name": "ECPS",
  "type": "abstract",
  "description": "Evaporator/Condenser Refrigerant Pressure Monitoring",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "evaporator_refrigerant_pressure_sensor",
   "condensing_refrigerant_pressure_sensor"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "ECTS": {
  "name": "ECTS",
  "type": "abstract",
  "description": "Evaporator/Condenser Refrigerant Temperature Monitoring",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "evaporator_refrigerant_temperature_sensor",
   "condensing_refrigerant_temperature_sensor"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "ODUM": {
  "name": "ODUM",
  "type": "abstract",
  "description": "Outdoor Modules",
  "multi": true,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "HGLT",
   "HXGLLT",
   "SLT",
   "SDLP",
   "ECTS",
   "ECPS",
   "ICLOOP",
   "IEV",
   "SUBCOOLING",
   "CFG",
   "EH"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "VRFIDU": {
  "name": "VRFIDU",
  "type": "abstract",
  "description": "Indoor Unit Variable Refrigerant Flow",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "EV"
  ],
  "applies": [
   "GASLIQUIDLINE"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "GASLIQUIDLINE": {
  "name": "GASLIQUIDLINE",
  "type": "abstract",
  "description": "Refrigerant Line Temperature Monitoring",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "EXP",
   "LLT",
   "GLT"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "VOLUMETRICFLOWRATECONTROL": {
  "name": "VOLUMETRICFLOWRATECONTROL",
  "type": "abstract",
  "description": "High Limit Volumetric Flowrate Control",
  "multi": false,
  "uses": [
   "high_limit_flowrate_setpoint"
  ],
  "opt_uses": [
   "high_limit_nominal_flowrate_setpoint",
   "high_limit_percentage_setpoint",
   "max_flowrate_setpoint"
  ],
  "implements": [
   "VOLUMETRICFLOWRATE"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "VOLUMETRICFLOWRATE": {
  "name": "VOLUMETRICFLOWRATE",
  "type": "abstract",
  "description": "Volumetric Flowrate Monitoring",
  "multi": true,
  "uses": [
   "flowrate_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "VOLUMETRICFLOW": {
  "name": "VOLUMETRICFLOW",
  "type": "abstract",
  "description": "Volumetric Flow Monitoring",
  "multi": true,
  "uses": [
   "total_volume_accumulator"
  ],
  "opt_uses": [
   "differential_volume_accumulator"
  ],
  "implements": [],
  "applies": [
   "VOLUMETRICFLOWCOST",
   "VOLUMETRICFLOWPERCENTAGE"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "VOLUMETRICFLOWCOST": {
  "name": "VOLUMETRICFLOWCOST",
  "type": "abstract",
  "description": "Volumetric Flow Cost Monitoring",
  "multi": false,
  "uses": [
   "differential_cost_accumulator"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "VOLUMETRICFLOWPERCENTAGE": {
  "name": "VOLUMETRICFLOWPERCENTAGE",
  "type": "abstract",
  "description": "Volumetric Flow Percentage Monitoring",
  "multi": false,
  "uses": [
   "differential_percentage_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "ENERGYFLOWRATECONTROL": {
  "name": "ENERGYFLOWRATECONTROL",
  "type": "abstract",
  "description": "High Limit Energy Flowrate Control",
  "multi": true,
  "uses": [
   "high_limit_power_setpoint"
  ],
  "opt_uses": [
   "high_limit_nominal_power_setpoint"
  ],
  "implements": [
   "ENERGYFLOWRATE"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "ENERGYFLOWRATE": {
  "name": "ENERGYFLOWRATE",
  "type": "abstract",
  "description": "Energy Flowrate Monitoring",
  "multi": false,
  "uses": [
   "power_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "ENERGYFLOW": {
  "name": "ENERGYFLOW",
  "type": "abstract",
  "description": "Energy Flow Monitoring",
  "multi": true,
  "uses": [
   "total_energy_accumulator"
  ],
  "opt_uses": [
   "differential_energy_accumulator"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "COOLINGENERGYFLOW": {
  "name": "COOLINGENERGYFLOW",
  "type": "abstract",
  "description": "Cooling Energy Flow Monitoring",
  "multi": true,
  "uses": [
   "total_cooling_energy_accumulator"
  ],
  "opt_uses": [
   "cooling_power_sensor",
   "differential_cooling_energy_accumulator"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HEATINGENERGYFLOW": {
  "name": "HEATINGENERGYFLOW",
  "type": "abstract",
  "description": "Heating Energy Flow Monitoring",
  "multi": true,
  "uses": [
   "total_heating_energy_accumulator"
  ],
  "opt_uses": [
   "heating_power_sensor",
   "differential_heating_energy_accumulator"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "MASSFLOWRATE": {
  "name": "MASSFLOWRATE",
  "type": "abstract",
  "description": "Mass Flowrate Monitoring",
  "multi": true,
  "uses": [
   "massflowrate_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "MASSFLOW": {
  "name": "MASSFLOW",
  "type": "abstract",
  "description": "Mass Flow Monitoring",
  "multi": true,
  "uses": [
   "total_mass_accumulator"
  ],
  "opt_uses": [
   "differential_mass_accumulator"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "GASTEMP": {
  "name": "GASTEMP",
  "type": "abstract",
  "description": "Gas Temperature Monitoring",
  "multi": true,
  "uses": [
   "gas_temperature_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "STEAMTEMP": {
  "name": "STEAMTEMP",
  "type": "abstract",
  "description": "Steam Temperature Monitoring",
  "multi": false,
  "uses": [
   "steam_temperature_sensor"
  ],
  "opt_uses": [
   "steam_temperature_setpoint"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "STEAMPRESS": {
  "name": "STEAMPRESS",
  "type": "abstract",
  "description": "Steam Pressure Monitoring",
  "multi": true,
  "uses": [
   "steam_pressure_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SUPPLYRETURNTEMPERATURE": {
  "name": "SUPPLYRETURNTEMPERATURE",
  "type": "abstract",
  "description": "Temperatures Control",
  "multi": true,
  "uses": [
   "supply_temperature_sensor",
   "return_temperature_sensor"
  ],
  "opt_uses": [
   "supply_temperature_setpoint",
   "return_temperature_setpoint"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "VALVE": {
  "name": "VALVE",
  "type": "abstract",
  "description": "Valve Monitoring",
  "multi": true,
  "uses": [
   "valve_percentage_sensor"
  ],
  "opt_uses": [
   "valve_status"
  ],
  "implements": [],
  "applies": [
   "VALVESTS"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "VALVESTS": {
  "name": "VALVESTS",
  "type": "abstract",
  "description": "Valve Position Monitoring",
  "multi": true,
  "uses": [],
  "opt_uses": [
   "valve_status",
   "valve_command"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CO2": {
  "name": "CO2",
  "type": "abstract",
  "description": "CO2 Level Control",
  "multi": true,
  "uses": [
   "co2_concentration_detection_sensor"
  ],
  "opt_uses": [
   "high_limit_co2_concentration_setpoint",
   "low_limit_co2_concentration_setpoint"
  ],
  "implements": [
   "AQM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CO": {
  "name": "CO",
  "type": "abstract",
  "description": "CO Level Control",
  "multi": true,
  "uses": [
   "co_concentration_detection_sensor"
  ],
  "opt_uses": [
   "high_limit_co_concentration_setpoint",
   "low_limit_co_concentration_setpoint"
  ],
  "implements": [
   "AQM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "GAS": {
  "name": "GAS",
  "type": "abstract",
  "description": "Combustible Gas Level Control",
  "multi": true,
  "uses": [
   "gas_detection_percentage_sensor"
  ],
  "opt_uses": [
   "high_limit_gas_percentage_setpoint",
   "low_limit_gas_percentage_setpoint"
  ],
  "implements": [
   "AQM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "NO": {
  "name": "NO",
  "type": "abstract",
  "description": "NO Level Control",
  "multi": true,
  "uses": [
   "no_concentration_detection_sensor"
  ],
  "opt_uses": [
   "high_limit_no_concentration_setpoint",
   "low_limit_no_concentration_setpoint"
  ],
  "implements": [
   "AQM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "NO2": {
  "name": "NO2",
  "type": "abstract",
  "description": "NO2 Level Control",
  "multi": true,
  "uses": [
   "no2_concentration_detection_sensor"
  ],
  "opt_uses": [
   "high_limit_no2_concentration_setpoint",
   "low_limit_no2_concentration_setpoint"
  ],
  "implements": [
   "AQM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HCHO": {
  "name": "HCHO",
  "type": "abstract",
  "description": "HCHO Level Control",
  "multi": true,
  "uses": [
   "hcho_concentration_detection_sensor"
  ],
  "opt_uses": [
   "high_limit_hcho_concentration_setpoint",
   "low_limit_hcho_concentration_setpoint"
  ],
  "implements": [
   "AQM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "NH3": {
  "name": "NH3",
  "type": "abstract",
  "description": "NH3 Level Control",
  "multi": true,
  "uses": [
   "nh3_concentration_detection_sensor"
  ],
  "opt_uses": [
   "high_limit_nh3_concentration_setpoint",
   "low_limit_nh3_concentration_setpoint"
  ],
  "implements": [
   "AQM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "O3": {
  "name": "O3",
  "type": "abstract",
  "description": "O3 Level Control",
  "multi": true,
  "uses": [
   "o3_concentration_detection_sensor"
  ],
  "opt_uses": [
   "high_limit_o3_concentration_setpoint",
   "low_limit_o3_concentration_setpoint"
  ],
  "implements": [
   "AQM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "PARTICLEMONITORING": {
  "name": "PARTICLEMONITORING",
  "type": "abstract",
  "description": "Particle Monitoring",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [],
  "applies": [
   "PM1",
   "PM25",
   "PM10",
   "TVOC"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "PM1": {
  "name": "PM1",
  "type": "abstract",
  "description": "PM1 Level Control",
  "multi": true,
  "uses": [
   "pm1_concentration_detection_sensor"
  ],
  "opt_uses": [
   "high_limit_pm1_concentration_setpoint",
   "low_limit_pm1_concentration_setpoint"
  ],
  "implements": [
   "AQM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "PM4": {
  "name": "PM4",
  "type": "abstract",
  "description": "PM4 Level Control",
  "multi": true,
  "uses": [
   "pm4_concentration_detection_sensor"
  ],
  "opt_uses": [
   "high_limit_pm4_concentration_setpoint",
   "low_limit_pm4_concentration_setpoint"
  ],
  "implements": [
   "AQM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "PM25": {
  "name": "PM25",
  "type": "abstract",
  "description": "PM25 Level Control",
  "multi": true,
  "uses": [
   "pm25_concentration_detection_sensor"
  ],
  "opt_uses": [
   "high_limit_pm25_concentration_setpoint",
   "low_limit_pm25_concentration_setpoint"
  ],
  "implements": [
   "AQM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "PM10": {
  "name": "PM10",
  "type": "abstract",
  "description": "PM10 Level Control",
  "multi": true,
  "uses": [
   "pm10_concentration_detection_sensor"
  ],
  "opt_uses": [
   "high_limit_pm10_concentration_setpoint",
   "low_limit_pm10_concentration_setpoint"
  ],
  "implements": [
   "AQM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "TVOC": {
  "name": "TVOC",
  "type": "abstract",
  "description": "TVOC Level Control",
  "multi": true,
  "uses": [
   "voc_concentration_detection_sensor"
  ],
  "opt_uses": [
   "high_limit_voc_concentration_setpoint",
   "low_limit_voc_concentration_setpoint"
  ],
  "implements": [
   "AQM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SOUND": {
  "name": "SOUND",
  "type": "abstract",
  "description": "Sound Intensity Control",
  "multi": true,
  "uses": [
   "noise_sensor"
  ],
  "opt_uses": [],
  "implements": [
   "AQM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "LIGHT": {
  "name": "LIGHT",
  "type": "abstract",
  "description": "Light Intensity Control",
  "multi": true,
  "uses": [],
  "opt_uses": [
   "illuminance_sensor",
   "brightness_percentage_sensor"
  ],
  "implements": [
   "AQM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "MOTION": {
  "name": "MOTION",
  "type": "abstract",
  "description": "Motion Monitoring",
  "multi": false,
  "uses": [
   "motion_detection_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SATISFACTION": {
  "name": "SATISFACTION",
  "type": "abstract",
  "description": "Satisfaction Monitoring",
  "multi": false,
  "uses": [
   "satisfaction_percentage_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "REFRIGERANT": {
  "name": "REFRIGERANT",
  "type": "abstract",
  "description": "Refrigerant Level Control",
  "multi": true,
  "uses": [
   "refrigerant_concentration_detection_sensor"
  ],
  "opt_uses": [
   "high_limit_refrigerant_concentration_setpoint"
  ],
  "implements": [
   "AQM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "ZONESMONITORING": {
  "name": "ZONESMONITORING",
  "type": "abstract",
  "description": "Humidity, Temperature Monitoring",
  "multi": true,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "AQM"
  ],
  "applies": [
   "ZTS",
   "ZHSS",
   "OCCUPANCY"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "ENERGYMONITORING": {
  "name": "ENERGYMONITORING",
  "type": "abstract",
  "description": "Electrical Energy Monitoring",
  "multi": false,
  "uses": [
   "total_electric_energy_accumulator"
  ],
  "opt_uses": [
   "total_reactive_electric_energy_accumulator"
  ],
  "implements": [],
  "applies": [
   "DIFFENERGYMONITORING"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "DIFFENERGYMONITORING": {
  "name": "DIFFENERGYMONITORING",
  "type": "abstract",
  "description": "Differential Electrical Energy Monitoring",
  "multi": true,
  "uses": [
   "differential_electric_energy_accumulator"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "PEAKDEMANDMONITORING": {
  "name": "PEAKDEMANDMONITORING",
  "type": "abstract",
  "description": "Peak Demand Monitoring",
  "multi": false,
  "uses": [
   "max_power_sensor"
  ],
  "opt_uses": [
   "average_power_sensor",
   "monthly_max_power_sensor",
   "previous_monthly_max_power_sensor"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "OUTPUTLINE": {
  "name": "OUTPUTLINE",
  "type": "abstract",
  "description": "Output Line",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [],
  "applies": [
   "OUTPUTPHASEVCMONITORING",
   "OUTPUTVCMONITORING",
   "OUTPUTPRCUTIL",
   "OUTPUTPOWERMONITORING",
   "OUTPUTPHASEPOWERMONITORING",
   "OUTPUTCURRIMBMONITORING",
   "OUTPUTFREQMONITORING"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "OUTPUTPHASEVCMONITORING": {
  "name": "OUTPUTPHASEVCMONITORING",
  "type": "abstract",
  "description": "Output Phase Level Voltage/Current Monitoring",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "OUTPUTPHASECMONITORING",
   "OUTPUTPHASEVLLMONITORING"
  ],
  "applies": [
   "OUTPUTPHASEVLNMONITORING"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "OUTPUTPHASECMONITORING": {
  "name": "OUTPUTPHASECMONITORING",
  "type": "abstract",
  "description": "Output Phase Level Current Monitoring",
  "multi": false,
  "uses": [
   "output_phase1_line_current_sensor",
   "output_phase2_line_current_sensor",
   "output_phase3_line_current_sensor"
  ],
  "opt_uses": [
   "output_neutral_line_current_sensor",
   "output_ground_line_current_sensor",
   "output_phase1_line_percentage_sensor",
   "output_phase2_line_percentage_sensor",
   "output_phase3_line_percentage_sensor"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "OUTPUTPHASEVLLMONITORING": {
  "name": "OUTPUTPHASEVLLMONITORING",
  "type": "abstract",
  "description": "Output Phase Level Line-Line Voltage Monitoring",
  "multi": false,
  "uses": [
   "output_phase1_phase2_line_voltage_sensor",
   "output_phase3_phase1_line_voltage_sensor",
   "output_phase2_phase3_line_voltage_sensor"
  ],
  "opt_uses": [
   "output_phase1_neutral_line_voltage_sensor",
   "output_phase2_neutral_line_voltage_sensor",
   "output_phase3_neutral_line_voltage_sensor"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "OUTPUTPHASEVLNMONITORING": {
  "name": "OUTPUTPHASEVLNMONITORING",
  "type": "abstract",
  "description": "Output Phase Level Line-Neutral Voltage Monitoring",
  "multi": false,
  "uses": [
   "output_phase1_neutral_line_voltage_sensor",
   "output_phase2_neutral_line_voltage_sensor",
   "output_phase3_neutral_line_voltage_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "OUTPUTVCMONITORING": {
  "name": "OUTPUTVCMONITORING",
  "type": "abstract",
  "description": "Output Voltage/Current Monitoring",
  "multi": false,
  "uses": [
   "output_average_line_line_voltage_sensor",
   "output_average_line_current_sensor"
  ],
  "opt_uses": [
   "output_total_line_current_sensor",
   "output_average_line_neutral_voltage_sensor",
   "max_output_current_label",
   "output_voltage_setpoint"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "OUTPUTPRCUTIL": {
  "name": "OUTPUTPRCUTIL",
  "type": "abstract",
  "description": "Output Utilization Percentage",
  "multi": false,
  "uses": [
   "output_use_percentage_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "OUTPUTCURRIMBMONITORING": {
  "name": "OUTPUTCURRIMBMONITORING",
  "type": "abstract",
  "description": "Output Current Imbalance Monitoring",
  "multi": false,
  "uses": [
   "output_line_compressor_offset_percentage_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "OUTPUTPOWERMONITORING": {
  "name": "OUTPUTPOWERMONITORING",
  "type": "abstract",
  "description": "Output Power/Energy Monitoring",
  "multi": false,
  "uses": [
   "output_power_sensor"
  ],
  "opt_uses": [
   "output_apparent_power_sensor",
   "output_reactive_power_sensor",
   "output_powerfactor_sensor",
   "output_line_angle_sensor",
   "output_parallel_power_sensor",
   "max_output_power_label"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "OUTPUTPHASEPOWERMONITORING": {
  "name": "OUTPUTPHASEPOWERMONITORING",
  "type": "abstract",
  "description": "Output Phase Level Power Monitoring",
  "multi": false,
  "uses": [
   "output_phase1_power_sensor",
   "output_phase2_power_sensor",
   "output_phase3_power_sensor"
  ],
  "opt_uses": [
   "output_phase1_powerfactor_sensor",
   "output_phase2_powerfactor_sensor",
   "output_phase3_powerfactor_sensor",
   "output_phase1_angle_sensor",
   "output_phase2_angle_sensor",
   "output_phase3_angle_sensor",
   "output_phase1_apparent_power_sensor",
   "output_phase2_apparent_power_sensor",
   "output_phase3_apparent_power_sensor"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "OUTPUTFREQMONITORING": {
  "name": "OUTPUTFREQMONITORING",
  "type": "abstract",
  "description": "Output Frequency Monitoring",
  "multi": false,
  "uses": [
   "output_frequency_sensor"
  ],
  "opt_uses": [
   "output_phase1_frequency_sensor",
   "output_phase2_frequency_sensor",
   "output_phase3_frequency_sensor"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "INPUTLINE": {
  "name": "INPUTLINE",
  "type": "abstract",
  "description": "Input Line",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [],
  "applies": [
   "INPUTPHASEVCMONITORING",
   "INPUTVCMONITORING",
   "INPUTPOWERMONITORING",
   "INPUTPHASEPOWERMONITORING",
   "INPUTFREQMONITORING"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "INPUTPHASEVCMONITORING": {
  "name": "INPUTPHASEVCMONITORING",
  "type": "abstract",
  "description": "Input Phase Level Voltage/Current Monitoring",
  "multi": false,
  "uses": [
   "input_phase1_phase2_line_voltage_sensor",
   "input_phase3_phase1_line_voltage_sensor",
   "input_phase2_phase3_line_voltage_sensor"
  ],
  "opt_uses": [
   "input_phase1_line_current_sensor",
   "input_phase2_line_current_sensor",
   "input_phase3_line_current_sensor",
   "input_phase1_neutral_line_voltage_sensor",
   "input_phase2_neutral_line_voltage_sensor",
   "input_phase3_neutral_line_voltage_sensor"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "INPUTVCMONITORING": {
  "name": "INPUTVCMONITORING",
  "type": "abstract",
  "description": "Input Voltage/Current Monitoring",
  "multi": false,
  "uses": [
   "input_average_line_line_voltage_sensor",
   "input_average_line_current_sensor"
  ],
  "opt_uses": [
   "input_average_line_neutral_voltage_sensor"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "INPUTPOWERMONITORING": {
  "name": "INPUTPOWERMONITORING",
  "type": "abstract",
  "description": "Input Power/Energy Monitoring",
  "multi": false,
  "uses": [
   "input_power_sensor"
  ],
  "opt_uses": [
   "input_apparent_power_sensor",
   "input_powerfactor_sensor",
   "input_reactive_power_sensor"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "INPUTPHASEPOWERMONITORING": {
  "name": "INPUTPHASEPOWERMONITORING",
  "type": "abstract",
  "description": "Input Phase Level Power Monitoring",
  "multi": false,
  "uses": [
   "input_phase1_power_sensor",
   "input_phase2_power_sensor",
   "input_phase3_power_sensor"
  ],
  "opt_uses": [
   "input_phase1_powerfactor_sensor",
   "input_phase2_powerfactor_sensor",
   "input_phase3_powerfactor_sensor",
   "input_phase1_apparent_power_sensor",
   "input_phase2_apparent_power_sensor",
   "input_phase3_apparent_power_sensor"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "INPUTFREQMONITORING": {
  "name": "INPUTFREQMONITORING",
  "type": "abstract",
  "description": "Input Frequency Monitoring",
  "multi": false,
  "uses": [
   "input_frequency_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "BYPASSLINE": {
  "name": "BYPASSLINE",
  "type": "abstract",
  "description": "Bypass Line",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [],
  "applies": [
   "BYPASSPHASEVMONITORING",
   "BYPASSVCMONITORING",
   "BYPASSFREQMONITORING"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "BYPASSPHASEVMONITORING": {
  "name": "BYPASSPHASEVMONITORING",
  "type": "abstract",
  "description": "Bypass Phase Level Voltage Monitoring",
  "multi": false,
  "uses": [
   "bypass_phase1_phase2_line_voltage_sensor",
   "bypass_phase3_phase1_line_voltage_sensor",
   "bypass_phase2_phase3_line_voltage_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "BYPASSVCMONITORING": {
  "name": "BYPASSVCMONITORING",
  "type": "abstract",
  "description": "Bypass Average Voltage/Current Monitoring",
  "multi": false,
  "uses": [
   "bypass_average_line_line_voltage_sensor",
   "bypass_average_line_current_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "BYPASSFREQMONITORING": {
  "name": "BYPASSFREQMONITORING",
  "type": "abstract",
  "description": "Bypass Frequency Monitoring",
  "multi": false,
  "uses": [
   "bypass_frequency_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "EXTERNALSOURCE": {
  "name": "EXTERNALSOURCE",
  "type": "abstract",
  "description": "External Source",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [],
  "applies": [
   "EXTSRCPHASEVMONITORING",
   "EXTSRCFREQMONITORING",
   "FLYWHEELUTILIZATION",
   "BATTERYLVL",
   "BATTERY",
   "BATTERYTEMP",
   "BATTERYSTS",
   "REMAININGTIME",
   "BATTIOCHARGETOTAL"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "EXTSRCPHASEVMONITORING": {
  "name": "EXTSRCPHASEVMONITORING",
  "type": "abstract",
  "description": "External Source Phase Level Voltage Monitoring",
  "multi": false,
  "uses": [
   "battery_source_phase1_phase2_line_voltage_sensor",
   "battery_source_phase1_phase3_line_voltage_sensor",
   "battery_source_phase2_phase3_line_voltage_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "EXTSRCFREQMONITORING": {
  "name": "EXTSRCFREQMONITORING",
  "type": "abstract",
  "description": "Battery Frequency Monitoring",
  "multi": false,
  "uses": [
   "battery_source_frequency_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "FLYWHEELUTILIZATION": {
  "name": "FLYWHEELUTILIZATION",
  "type": "abstract",
  "description": "Flywheel Utilization Monitoring",
  "multi": false,
  "uses": [
   "wheel_output_percentage_sensor",
   "wheel_angularvelocity_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "OUTPUTSOURCE": {
  "name": "OUTPUTSOURCE",
  "type": "abstract",
  "description": "Output Source",
  "multi": false,
  "uses": [
   "output_source_label"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "INLETTEMPERATURE": {
  "name": "INLETTEMPERATURE",
  "type": "abstract",
  "description": "Inlet Temperature Monitoring",
  "multi": false,
  "uses": [
   "air_inlet_temperature_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "BATTERY": {
  "name": "BATTERY",
  "type": "abstract",
  "description": "Battery Electricity Monitoring",
  "multi": true,
  "uses": [],
  "opt_uses": [
   "battery_charge_current_sensor",
   "battery_voltage_sensor",
   "battery_power_sensor",
   "battery_current_sensor"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "BATTERYTEMP": {
  "name": "BATTERYTEMP",
  "type": "abstract",
  "description": "Battery Temperature Monitoring",
  "multi": false,
  "uses": [
   "battery_temperature_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "REMAININGTIME": {
  "name": "REMAININGTIME",
  "type": "abstract",
  "description": "Energy Source Time Monitoring",
  "multi": false,
  "uses": [
   "remaining_time_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "DCVOLTAGE": {
  "name": "DCVOLTAGE",
  "type": "abstract",
  "description": "Direct Current Voltage Monitoring",
  "multi": false,
  "uses": [
   "voltage_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "COOLANT": {
  "name": "COOLANT",
  "type": "abstract",
  "description": "Coolant Monitoring",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "COOLANTTEMP",
   "COOLANTLEVEL"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "COOLANTTEMP": {
  "name": "COOLANTTEMP",
  "type": "abstract",
  "description": "Coolant Temperature Monitoring",
  "multi": false,
  "uses": [
   "cooling_liquid_temperature_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "COOLANTLEVEL": {
  "name": "COOLANTLEVEL",
  "type": "abstract",
  "description": "Coolant Level Monitoring",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "cooling_liquid_tank_percentage_sensor",
   "cooling_liquid_tank_volume_sensor"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "FUEL": {
  "name": "FUEL",
  "type": "abstract",
  "description": "Fuel Level Monitoring",
  "multi": false,
  "uses": [
   "fuel_tank_percentage_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "OILPRESSURE": {
  "name": "OILPRESSURE",
  "type": "abstract",
  "description": "Oil Pressure Monitoring",
  "multi": false,
  "uses": [
   "oil_pressure_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "TILT": {
  "name": "TILT",
  "type": "abstract",
  "description": "Shade Tilt Control",
  "multi": false,
  "uses": [
   "tilt_command"
  ],
  "opt_uses": [
   "tilt_status"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CONTAINERLOAD": {
  "name": "CONTAINERLOAD",
  "type": "abstract",
  "description": "Container Mass Load",
  "multi": false,
  "uses": [
   "total_mass_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "FLOORPOSITION": {
  "name": "FLOORPOSITION",
  "type": "abstract",
  "description": "Position",
  "multi": false,
  "uses": [
   "level_position_sensor"
  ],
  "opt_uses": [
   "next_level_position_sensor"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "LIGHTINGUNIT": {
  "name": "LIGHTINGUNIT",
  "type": "abstract",
  "description": "Lighting Unit",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [],
  "applies": [
   "GENERALCOMMAND",
   "LIGHTINGCONTROL",
   "SCENE"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "GENERALCOMMAND": {
  "name": "GENERALCOMMAND",
  "type": "abstract",
  "description": "Lighting General Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "building_command",
   "building_status"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "LIGHTINGCONTROL": {
  "name": "LIGHTINGCONTROL",
  "type": "abstract",
  "description": "Lighting Control",
  "multi": true,
  "uses": [],
  "opt_uses": [],
  "implements": [],
  "applies": [
   "SS",
   "PRC",
   "STATS"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SCENE": {
  "name": "SCENE",
  "type": "abstract",
  "description": "RBG Scene Control",
  "multi": true,
  "uses": [],
  "opt_uses": [
   "scene_command",
   "scene_status"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "OCCUPANCYINDICATOR": {
  "name": "OCCUPANCYINDICATOR",
  "type": "abstract",
  "description": "Occupancy Monitoring",
  "multi": true,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "EOS"
  ],
  "applies": [
   "OM"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "PANELTEMP": {
  "name": "PANELTEMP",
  "type": "abstract",
  "description": "Panel Temperature Monitoring",
  "multi": false,
  "uses": [
   "controller_temperature_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "PRESENCE": {
  "name": "PRESENCE",
  "type": "abstract",
  "description": "Space Presence Monitoring",
  "multi": true,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "OCCM"
  ],
  "applies": [
   "EOS",
   "DURATION",
   "VEHICLETYPE",
   "VIOLATION",
   "AVAILABILITY"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "AVAILABILITY": {
  "name": "AVAILABILITY",
  "type": "abstract",
  "description": "Availability Count",
  "multi": false,
  "uses": [
   "total_unoccupied_count"
  ],
  "opt_uses": [
   "max_unoccupied_count",
   "ongoing_status"
  ],
  "implements": [
   "OCCM"
  ],
  "applies": [
   "TYPEAVAILABILITY"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "TYPEAVAILABILITY": {
  "name": "TYPEAVAILABILITY",
  "type": "abstract",
  "description": "Availability Count By Type",
  "multi": true,
  "uses": [
   "unoccupied_count"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "VEHICLETYPE": {
  "name": "VEHICLETYPE",
  "type": "abstract",
  "description": "Vehicle Type Monitoring",
  "multi": false,
  "uses": [
   "occupancy_label"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CHARGER": {
  "name": "CHARGER",
  "type": "abstract",
  "description": "Electric Charger",
  "multi": true,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "CONNECTION",
   "FLTLAB"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "DURATION": {
  "name": "DURATION",
  "type": "abstract",
  "description": "Occupancy Duration Monitoring",
  "multi": false,
  "uses": [
   "occupancy_time_accumulator"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "VIOLATION": {
  "name": "VIOLATION",
  "type": "abstract",
  "description": "Threshold Violation Monitoring",
  "multi": false,
  "uses": [
   "threshold_alarm"
  ],
  "opt_uses": [
   "threshold_percentage_command",
   "threshold_time_command",
   "threshold_people_capacity"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CONNECTION": {
  "name": "CONNECTION",
  "type": "abstract",
  "description": "Connection Status",
  "multi": false,
  "uses": [
   "connection_status"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "COUNTER": {
  "name": "COUNTER",
  "type": "abstract",
  "description": "Occupancy Count",
  "multi": false,
  "uses": [
   "occupancy_count"
  ],
  "opt_uses": [],
  "implements": [
   "OCCM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "ENTRANCECOUNTER": {
  "name": "ENTRANCECOUNTER",
  "type": "abstract",
  "description": "Entrance Counter",
  "multi": true,
  "uses": [
   "people_entering_counter",
   "people_leaving_counter"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "BATTERYLVL": {
  "name": "BATTERYLVL",
  "type": "abstract",
  "description": "Battery Level Monitoring",
  "multi": false,
  "uses": [
   "battery_percentage_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SOILTEMP": {
  "name": "SOILTEMP",
  "type": "abstract",
  "description": "Soil Temperature Monitoring",
  "multi": false,
  "uses": [
   "soil_temperature_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SOILMOIST": {
  "name": "SOILMOIST",
  "type": "abstract",
  "description": "Soil Moisture Monitoring",
  "multi": false,
  "uses": [
   "soil_humidity_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SOILRESISTANCE": {
  "name": "SOILRESISTANCE",
  "type": "abstract",
  "description": "Soil Resistance Monitoring",
  "multi": false,
  "uses": [
   "soil_resistance_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SOILCONDUCT": {
  "name": "SOILCONDUCT",
  "type": "abstract",
  "description": "Soil Conductivity Monitoring",
  "multi": false,
  "uses": [
   "minerals_concentration_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "BATTERYSTS": {
  "name": "BATTERYSTS",
  "type": "abstract",
  "description": "Battery Monitoring",
  "multi": false,
  "uses": [
   "battery_status"
  ],
  "opt_uses": [
   "battery_fault_status"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "DOORSTS": {
  "name": "DOORSTS",
  "type": "abstract",
  "description": "Door Status",
  "multi": true,
  "uses": [
   "door_status"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "WINDOWSTS": {
  "name": "WINDOWSTS",
  "type": "abstract",
  "description": "Window Status",
  "multi": true,
  "uses": [
   "window_status"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "LOCKSTS": {
  "name": "LOCKSTS",
  "type": "abstract",
  "description": "Lock Status",
  "multi": true,
  "uses": [
   "lock_status"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CONTROLLERSTS": {
  "name": "CONTROLLERSTS",
  "type": "abstract",
  "description": "Controller Status",
  "multi": true,
  "uses": [
   "controller_status"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "ASSIGNMENTSUBUNIT": {
  "name": "ASSIGNMENTSUBUNIT",
  "type": "abstract",
  "description": "Subgroup of units",
  "multi": true,
  "uses": [
   "blocked_status"
  ],
  "opt_uses": [],
  "implements": [
   "EOS"
  ],
  "applies": [
   "ESS",
   "COUNTER"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "ASSIGNMENTUNIT": {
  "name": "ASSIGNMENTUNIT",
  "type": "abstract",
  "description": "Group of Units",
  "multi": true,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "ASSIGNMENTSUBUNIT"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "DISPENSER": {
  "name": "DISPENSER",
  "type": "abstract",
  "description": "Dispenser",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "VIOLATION"
  ],
  "applies": [
   "SUPPLYMONITORING",
   "ALARMS"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SUPPLYMONITORING": {
  "name": "SUPPLYMONITORING",
  "type": "abstract",
  "description": "Supply Monitoring",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [],
  "applies": [
   "SPLM",
   "TRAFFICM"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SPLM": {
  "name": "SPLM",
  "type": "abstract",
  "description": "Goods Supply Monitoring",
  "multi": false,
  "uses": [
   "supply_percentage_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "TRAFFICM": {
  "name": "TRAFFICM",
  "type": "abstract",
  "description": "People Traffic Monitoring",
  "multi": false,
  "uses": [
   "entering_counter"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SUPPLYINFO": {
  "name": "SUPPLYINFO",
  "type": "abstract",
  "description": "Tank Supply Info",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "previous_tank_supply_timestamp",
   "previous_supply_tank_percentage_sensor"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "DISCHARGEINFO": {
  "name": "DISCHARGEINFO",
  "type": "abstract",
  "description": "Tank Discharge Info",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "previous_tank_discharge_timestamp",
   "previous_discharge_tank_percentage_sensor"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "COMPONENT": {
  "name": "COMPONENT",
  "type": "abstract",
  "description": "Dispenser Component",
  "multi": true,
  "uses": [
   "tank_percentage_sensor",
   "dispenser_status",
   "dispenser_refill_status"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [
   "BATTERYLVL",
   "BATTERYSTS",
   "SUPPLYINFO",
   "DISCHARGEINFO",
   "LOADCOUNT"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "PROCESSCOUNT": {
  "name": "PROCESSCOUNT",
  "type": "abstract",
  "description": "Process Count",
  "multi": true,
  "uses": [
   "ongoing_counter"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "LOADCOUNT": {
  "name": "LOADCOUNT",
  "type": "abstract",
  "description": "Container Material Count",
  "multi": true,
  "uses": [
   "ongoing_object_counter"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "AIRCHANGES": {
  "name": "AIRCHANGES",
  "type": "abstract",
  "description": "Air Changes Monitoring",
  "multi": false,
  "uses": [
   "air_change_count",
   "outside_air_change_count"
  ],
  "opt_uses": [
   "ongoing_total_outside_air_change_count",
   "ongoing_total_air_change_count",
   "single_air_change_time_accumulator",
   "single_outside_air_change_time_accumulator"
  ],
  "implements": [
   "AQM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SOLARFLUX": {
  "name": "SOLARFLUX",
  "type": "abstract",
  "description": "Glass Solar Flux Monitoring",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [],
  "applies": [
   "EXTSOLARFLUX",
   "INTSOLARFLUX",
   "SOLARYIELD"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "EXTSOLARFLUX": {
  "name": "EXTSOLARFLUX",
  "type": "abstract",
  "description": "External Glass Solar Flux Monitoring",
  "multi": false,
  "uses": [
   "external_glass_solar_flux_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "INTSOLARFLUX": {
  "name": "INTSOLARFLUX",
  "type": "abstract",
  "description": "Internal Glass Solar Flux Monitoring",
  "multi": false,
  "uses": [
   "internal_glass_solar_flux_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SOLARYIELD": {
  "name": "SOLARYIELD",
  "type": "abstract",
  "description": "Internal Glass Solar Yield Monitoring",
  "multi": false,
  "uses": [
   "internal_glass_solar_level_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HTGFLUX": {
  "name": "HTGFLUX",
  "type": "abstract",
  "description": "Internal Glass Heating Flux Monitoring",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "internal_glass_heating_flux_sensor",
   "internal_frame_heating_flux_sensor"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "INTGLASSTEMP": {
  "name": "INTGLASSTEMP",
  "type": "abstract",
  "description": "Internal Glass Temperature Monitoring",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "internal_glass_temperature_sensor",
   "internal_frame_temperature_sensor",
   "internal_wemsfilm_temperature_sensor"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "INSPANELTEMP": {
  "name": "INSPANELTEMP",
  "type": "abstract",
  "description": "Insulated Panel Temperature Monitoring",
  "multi": false,
  "uses": [
   "insulated_controller_temperature_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "INTAIRTEMP": {
  "name": "INTAIRTEMP",
  "type": "abstract",
  "description": "Internal Air Temperature Monitoring",
  "multi": false,
  "uses": [
   "internal_air_temperature_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "EXTAIRTEMP": {
  "name": "EXTAIRTEMP",
  "type": "abstract",
  "description": "External Air Temperature Monitoring",
  "multi": false,
  "uses": [
   "external_air_temperature_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HEATFLUXTHERMOCOUPLE": {
  "name": "HEATFLUXTHERMOCOUPLE",
  "type": "abstract",
  "description": "Internal (Fiber)glass Temperature Monitoring",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "internal_glass_thermocouple_temperature_sensor",
   "internal_frame_thermocouple_temperature_sensor"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "EXTGLASSTEMP": {
  "name": "EXTGLASSTEMP",
  "type": "abstract",
  "description": "External (Fiber)glass Temperature Monitoring",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "external_glass_temperature_sensor",
   "external_frame_temperature_sensor"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "WINDSPEED": {
  "name": "WINDSPEED",
  "type": "abstract",
  "description": "Wind Monitoring",
  "multi": false,
  "uses": [
   "wind_linearvelocity_sensor"
  ],
  "opt_uses": [
   "wind_angle_sensor"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CLOUDPRECIP": {
  "name": "CLOUDPRECIP",
  "type": "abstract",
  "description": "Cloud Cover/ Precipitation Monitoring",
  "multi": false,
  "uses": [
   "cloud_percentage_sensor"
  ],
  "opt_uses": [
   "precipitation_label"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "PYRANOMETER": {
  "name": "PYRANOMETER",
  "type": "abstract",
  "description": "Pyranometer Flux Monitoring",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [],
  "applies": [
   "EXTPYRANOMETER",
   "INTPYRANOMETER",
   "PYRANOMETERYIELD"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "EXTPYRANOMETER": {
  "name": "EXTPYRANOMETER",
  "type": "abstract",
  "description": "External Glass Pyranometer",
  "multi": false,
  "uses": [
   "external_glass_pyranometer_flux_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "INTPYRANOMETER": {
  "name": "INTPYRANOMETER",
  "type": "abstract",
  "description": "Internal Glass Pyranometer",
  "multi": false,
  "uses": [
   "internal_glass_pyranometer_flux_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "PYRANOMETERYIELD": {
  "name": "PYRANOMETERYIELD",
  "type": "abstract",
  "description": "Internal Glass Pyranometer Thermal Yield Monitoring",
  "multi": false,
  "uses": [
   "internal_glass_pyranometer_level_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "PYRGEOMETER": {
  "name": "PYRGEOMETER",
  "type": "abstract",
  "description": "Pyranometer Monitoring",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [],
  "applies": [
   "EXTPYRGEOMETER"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "EXTPYRGEOMETER": {
  "name": "EXTPYRGEOMETER",
  "type": "abstract",
  "description": "External Glass Pyrgeometer",
  "multi": false,
  "uses": [
   "external_glass_pyrgeometer_flux_sensor"
  ],
  "opt_uses": [
   "external_glass_pyrgeometer_temperature_sensor"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "UFACTOR": {
  "name": "UFACTOR",
  "type": "abstract",
  "description": "U Factor",
  "multi": false,
  "uses": [
   "thermal_flux_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "RFACTOR": {
  "name": "RFACTOR",
  "type": "abstract",
  "description": "R Factor",
  "multi": false,
  "uses": [
   "thermal_resistance_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "DIFFERENTIALAIRTEMP": {
  "name": "DIFFERENTIALAIRTEMP",
  "type": "abstract",
  "description": "Internal-External Temperature Delta Monitoring",
  "multi": false,
  "uses": [
   "internal_external_differential_air_temperature_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "ALARMCOUNT": {
  "name": "ALARMCOUNT",
  "type": "abstract",
  "description": "Current Alarm Count",
  "multi": false,
  "uses": [
   "ongoing_event_counter"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "INVALID": {
  "name": "INVALID",
  "type": "abstract",
  "description": "Invalid",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "INCOMPLETE": {
  "name": "INCOMPLETE",
  "type": "abstract",
  "description": "Incomplete",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "EQUIPMENT": {
  "name": "EQUIPMENT",
  "type": "abstract",
  "description": "Equipment",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "CSM",
   "RM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HVAC": {
  "name": "HVAC",
  "type": "abstract",
  "description": "Heating Ventilation Air Conditioning",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "OCCM",
   "EQUIPMENT"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "LOOP": {
  "name": "LOOP",
  "type": "abstract",
  "description": "Circulation Loop",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "PLET"
  ],
  "applies": [
   "PLOOP"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "NETSTAT": {
  "name": "NETSTAT",
  "type": "abstract",
  "description": "Network Thermostat",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "ZTC",
   "ZTS"
  ],
  "applies": [
   "HVACC",
   "ZTSSG",
   "DFG"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "GATEWAY": {
  "name": "GATEWAY",
  "type": "abstract",
  "description": "Gateway",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "CSM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "METER": {
  "name": "METER",
  "type": "abstract",
  "description": "Meter",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "CSM"
  ],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "INPUTSOURCE": {
  "name": "INPUTSOURCE",
  "type": "abstract",
  "description": "Input Source",
  "multi": true,
  "uses": [
   "input_source_label"
  ],
  "opt_uses": [
   "input_source_status"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "AUDIO": {
  "name": "AUDIO",
  "type": "abstract",
  "description": "Audio System",
  "multi": true,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "ASP"
  ],
  "applies": [
   "ASC",
   "ASMC"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "ASP": {
  "name": "ASP",
  "type": "abstract",
  "description": "Audio Sound Percentage",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "audio_percentage_command",
   "audio_percentage_sensor"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "ASC": {
  "name": "ASC",
  "type": "abstract",
  "description": "Audio Sound Up/Down Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "audio_up_command",
   "audio_down_command"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "ASMC": {
  "name": "ASMC",
  "type": "abstract",
  "description": "Audio Sound Mute Control",
  "multi": false,
  "uses": [
   "audio_mute_sensor"
  ],
  "opt_uses": [
   "audio_mute_command"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SCREEN": {
  "name": "SCREEN",
  "type": "abstract",
  "description": "Screen System",
  "multi": true,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "SCREENSTATUS"
  ],
  "applies": [
   "SSC"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SCREENSTATUS": {
  "name": "SCREENSTATUS",
  "type": "abstract",
  "description": "Screen Status",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "screen_status",
   "screen_label"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SSC": {
  "name": "SSC",
  "type": "abstract",
  "description": "Screen System Commands",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "screen_on_command",
   "screen_off_command"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "cav": {
  "name": "cav",
  "type": "canonical",
  "description": "Constant Air Volume",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "DAF",
   "HVAC",
   "DDPM"
  ],
  "applies": [
   "ZCO2SS",
   "HVACC",
   "DASSG",
   "DAPS",
   "DDG",
   "OCCUPANCY",
   "ESS",
   "WINDOWSTS",
   "ALARMS"
  ],
  "validators": [],
  "input": [
   {
    "key": "isFedBy",
    "multi": false,
    "forEntities": [
     "cav"
    ]
   },
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "cav"
    ]
   }
  ],
  "output": [
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "cav"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isFedBy",
    "forCanonicals": [
     {
      "name": "ahu",
      "multi": true
     },
     {
      "name": "fcu",
      "multi": true
     },
     {
      "name": "hotWaterSystem",
      "multi": true
     },
     {
      "name": "waterSystem",
      "multi": true
     },
     {
      "name": "secLoopSystem",
      "multi": true
     },
     {
      "name": "loopSystem",
      "multi": true
     }
    ]
   },
   {
    "key": "isMeasuredBy",
    "forCanonicals": [
     {
      "name": "electricMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "cav",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "cav",
      "multi": false
     }
    ]
   }
  ]
 },
 "vav": {
  "name": "vav",
  "type": "canonical",
  "description": "Variable Air Volume",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "HVAC",
   "DAFC"
  ],
  "applies": [
   "NETSTAT",
   "ESS",
   "SS",
   "DASSG",
   "DAPSS",
   "DTSS",
   "STSS",
   "DDG",
   "EH",
   "HWV",
   "ZHSS",
   "SH",
   "ZCO2SS",
   "UNOCCHVACC",
   "ZNSPSS",
   "STATS",
   "OCCUPANCY",
   "WINDOWSTS",
   "PARTICLEMONITORING",
   "REQUESTS",
   "ALARMS",
   "PHMMX"
  ],
  "validators": [
   "IS_DDPM_XOR_CDDD_AND_HDDD",
   "IS_NETSTAT_OR_ZCO2SS"
  ],
  "input": [
   {
    "key": "isFedBy",
    "multi": false,
    "forEntities": [
     "vav"
    ]
   },
   {
    "key": "hasInputSubstance",
    "multi": false,
    "forEntities": [
     "HTGUM"
    ]
   },
   {
    "key": "isMeasuredBy",
    "multi": true
   },
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "vav"
    ]
   }
  ],
  "output": [
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "vav"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isFedBy",
    "forCanonicals": [
     {
      "name": "ahu",
      "multi": false
     },
     {
      "name": "waterSystem",
      "multi": false
     },
     {
      "name": "hotWaterSystem",
      "multi": false
     },
     {
      "name": "secLoopSystem",
      "multi": false
     },
     {
      "name": "loopSystem",
      "multi": false
     },
     {
      "name": "fcu",
      "multi": false
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "vav",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "vav",
      "multi": false
     }
    ]
   }
  ]
 },
 "ahu": {
  "name": "ahu",
  "type": "canonical",
  "description": "Air Handling Unit",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "HVAC"
  ],
  "applies": [
   "ESS",
   "SS",
   "FG",
   "DG",
   "AFC",
   "ATC",
   "DCTAP",
   "DDAH",
   "ECONOMIZER",
   "HWHG",
   "PREHEAT",
   "HWG",
   "CHWG",
   "CDWG",
   "HEATPUMP",
   "SVC",
   "GH",
   "EH",
   "HUMC",
   "DHUMC",
   "HUMSSG",
   "ZTSSG",
   "ZNAP",
   "RCO2SS",
   "ZCO2SS",
   "HVACC",
   "OCCUPANCY",
   "DM",
   "STATS",
   "PARTICLEMONITORING",
   "REQUESTS",
   "ALARMS",
   "FLTSTATS",
   "FBDPRC"
  ],
  "validators": [
   "IS_DFM_OR_SFM",
   "IS_DDAH_XOR_IS_DTSS_OR_IS_ZTC_AND_ZTS"
  ],
  "input": [
   {
    "key": "hasInputSubstance",
    "multi": true,
    "forEntities": [
     "HTGUM",
     "CLGUM",
     "CWVM"
    ]
   },
   {
    "key": "isFedBy",
    "multi": false
   },
   {
    "key": "isLocationOf",
    "multi": true
   },
   {
    "key": "isMeasuredBy",
    "multi": false
   },
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "ahu"
    ]
   }
  ],
  "output": [
   {
    "key": "feeds",
    "multi": true
   },
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "ahu"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isFedBy",
    "forCanonicals": [
     {
      "name": "chilledWaterSystem",
      "multi": true
     },
     {
      "name": "hotWaterSystem",
      "multi": true
     },
     {
      "name": "waterSystem",
      "multi": true
     },
     {
      "name": "ahu",
      "multi": true
     },
     {
      "name": "heatExchanger",
      "multi": true
     },
     {
      "name": "fan",
      "multi": true
     },
     {
      "name": "secLoopSystem",
      "multi": true
     },
     {
      "name": "outdoorVRF",
      "multi": true
     },
     {
      "name": "loopSystem",
      "multi": true
     }
    ]
   },
   {
    "key": "isMeasuredBy",
    "forCanonicals": [
     {
      "name": "electricMeter",
      "multi": true
     },
     {
      "name": "energyMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "ahu",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "feeds",
    "forCanonicals": [
     {
      "name": "ahu",
      "multi": true
     },
     {
      "name": "vav",
      "multi": true
     },
     {
      "name": "cav",
      "multi": true
     },
     {
      "name": "fcu",
      "multi": true
     },
     {
      "name": "uh",
      "multi": true
     },
     {
      "name": "fan",
      "multi": true
     }
    ]
   },
   {
    "key": "hasPart",
    "forCanonicals": [
     {
      "name": "fan",
      "multi": true
     }
    ]
   },
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "ahu",
      "multi": false
     }
    ]
   }
  ]
 },
 "fcu": {
  "name": "fcu",
  "type": "canonical",
  "description": "Fan Coil Unit",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "HVACOPM",
   "NETSTAT",
   "DFM",
   "HVAC"
  ],
  "applies": [
   "NETSTAT",
   "DAF",
   "STSS",
   "DTSS",
   "OTSS",
   "HEATPUMP",
   "SH",
   "EH",
   "GH",
   "VRFIDU",
   "CLGHTGG",
   "CHWV",
   "HWV",
   "HUMSSG",
   "ZCO2SS",
   "HUMC",
   "DHUMC",
   "DM",
   "STATS",
   "SS",
   "ESS",
   "OCCUPANCY",
   "WINDOWSTS",
   "ALARMS",
   "FLTSTATS"
  ],
  "validators": [],
  "input": [
   {
    "key": "hasInputSubstance",
    "multi": true,
    "forEntities": [
     "HTGUM",
     "CLGUM",
     "CWVM",
     "EXP"
    ]
   },
   {
    "key": "isFedBy",
    "multi": false
   },
   {
    "key": "isMeasuredBy",
    "multi": true
   },
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "fcu"
    ]
   }
  ],
  "output": [
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "fcu"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isMeasuredBy",
    "forCanonicals": [
     {
      "name": "electricMeter",
      "multi": true
     },
     {
      "name": "energyMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isFedBy",
    "forCanonicals": [
     {
      "name": "chilledWaterSystem",
      "multi": true
     },
     {
      "name": "hotWaterSystem",
      "multi": true
     },
     {
      "name": "waterSystem",
      "multi": true
     },
     {
      "name": "ahu",
      "multi": true
     },
     {
      "name": "heatExchanger",
      "multi": true
     },
     {
      "name": "fan",
      "multi": true
     },
     {
      "name": "condenserWaterSystem",
      "multi": true
     },
     {
      "name": "secLoopSystem",
      "multi": true
     },
     {
      "name": "outdoorVRF",
      "multi": true
     },
     {
      "name": "loopSystem",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "fcu",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "feeds",
    "forCanonicals": [
     {
      "name": "fan",
      "multi": true
     },
     {
      "name": "uh",
      "multi": true
     },
     {
      "name": "cav",
      "multi": true
     },
     {
      "name": "vav",
      "multi": true
     }
    ]
   },
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "fcu",
      "multi": false
     }
    ]
   }
  ]
 },
 "uh": {
  "name": "uh",
  "type": "canonical",
  "description": "Unit Heater",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "HVACOPM",
   "ZTS",
   "HVAC"
  ],
  "applies": [
   "ZTSSG",
   "RADIATOR",
   "DSM",
   "HWV",
   "EH",
   "GH",
   "OTSS",
   "OCCUPANCY",
   "ALARMS"
  ],
  "validators": [],
  "input": [
   {
    "key": "hasInputSubstance",
    "multi": true,
    "forEntities": [
     "HTGUM"
    ]
   },
   {
    "key": "isMeasuredBy",
    "multi": true
   },
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "uh"
    ]
   }
  ],
  "output": [
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "uh"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isFedBy",
    "forCanonicals": [
     {
      "name": "ahu",
      "multi": true
     },
     {
      "name": "fcu",
      "multi": true
     },
     {
      "name": "hotWaterSystem",
      "multi": true
     },
     {
      "name": "waterSystem",
      "multi": true
     },
     {
      "name": "secLoopSystem",
      "multi": true
     },
     {
      "name": "loopSystem",
      "multi": true
     }
    ]
   },
   {
    "key": "isMeasuredBy",
    "forCanonicals": [
     {
      "name": "electricMeter",
      "multi": true
     },
     {
      "name": "energyMeter",
      "multi": true
     },
     {
      "name": "waterMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "uh",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "uh",
      "multi": false
     }
    ]
   }
  ]
 },
 "boiler": {
  "name": "boiler",
  "type": "canonical",
  "description": "Boiler",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "EQUIPMENT"
  ],
  "applies": [
   "HWG",
   "HWTEMPSRS",
   "BOILERPUMP",
   "GH",
   "EH",
   "TTSS",
   "OTSS",
   "SOURCE",
   "DSM",
   "LEADLAG",
   "SS",
   "STATS",
   "OCCUPANCY",
   "ALARMS",
   "SVC",
   "STEAMTEMP",
   "STEAMPRESS",
   "STMPSS",
   "WLM",
   "CBTS",
   "CBFPRC",
   "CBFC",
   "CBO2P",
   "FRM"
  ],
  "validators": [
   "IS_HWELTS_OR_HWTEMPSRS_OR_HWLTS"
  ],
  "input": [
   {
    "key": "hasPart",
    "multi": true
   },
   {
    "key": "isMeasuredBy",
    "multi": true
   },
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "boiler"
    ]
   }
  ],
  "output": [
   {
    "key": "isAssociatedWith",
    "multi": false
   },
   {
    "key": "hasOutputSubstance",
    "multi": true
   },
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "boiler"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isMeasuredBy",
    "forCanonicals": [
     {
      "name": "electricMeter",
      "multi": true
     },
     {
      "name": "energyMeter",
      "multi": true
     },
     {
      "name": "waterMeter",
      "multi": true
     },
     {
      "name": "steamMeter",
      "multi": true
     },
     {
      "name": "gasMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isPartOf",
    "forCanonicals": [
     {
      "name": "hotWaterSystem",
      "multi": true
     },
     {
      "name": "waterSystem",
      "multi": true
     },
     {
      "name": "loopSystem",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "boiler",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "boiler",
      "multi": false
     }
    ]
   }
  ]
 },
 "chiller": {
  "name": "chiller",
  "type": "canonical",
  "description": "Chiller",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "HVAC",
   "CHWLT"
  ],
  "applies": [
   "CHWG",
   "CDWG",
   "CSCLOOP",
   "ICLOOP",
   "OILPUMP",
   "GUIDEVANES",
   "PURGE",
   "OTSS",
   "SS",
   "ESS",
   "PRC",
   "STATS",
   "OCCUPANCY",
   "ALARMS"
  ],
  "validators": [
   "IS_CFM_OR_CDWELT",
   "IS_CHWELT_OR_CHWLTS"
  ],
  "input": [
   {
    "key": "hasInputSubstance",
    "multi": true,
    "forEntities": [
     "CDWELT"
    ]
   },
   {
    "key": "isLocationOf",
    "multi": true
   },
   {
    "key": "hasPart",
    "multi": true
   },
   {
    "key": "isMeasuredBy",
    "multi": true
   },
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "chiller"
    ]
   }
  ],
  "output": [
   {
    "key": "isAssociatedWith",
    "multi": false
   },
   {
    "key": "hasOutputSubstance",
    "multi": true
   },
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "chiller"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isMeasuredBy",
    "forCanonicals": [
     {
      "name": "electricMeter",
      "multi": true
     },
     {
      "name": "energyMeter",
      "multi": true
     },
     {
      "name": "waterMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isPartOf",
    "forCanonicals": [
     {
      "name": "chilledWaterSystem",
      "multi": true
     },
     {
      "name": "waterSystem",
      "multi": true
     },
     {
      "name": "loopSystem",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "chiller",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "chiller",
      "multi": false
     }
    ]
   }
  ]
 },
 "heatPump": {
  "name": "heatPump",
  "type": "canonical",
  "description": "Outdoor HeatPump",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "HVAC",
   "HVACOPM",
   "WLTSS",
   "CFM"
  ],
  "applies": [
   "WATERTREATGROUP",
   "CSCLOOP",
   "ICLOOP",
   "HVACC",
   "OTSS",
   "HCCR",
   "SS",
   "ESS",
   "PRC",
   "STATS",
   "OCCUPANCY",
   "ALARMS",
   "FLTSTATS",
   "CHWELT",
   "HWELTS"
  ],
  "validators": [],
  "input": [
   {
    "key": "isLocationOf",
    "multi": true
   },
   {
    "key": "hasPart",
    "multi": true
   },
   {
    "key": "isMeasuredBy",
    "multi": true
   },
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "heatPump"
    ]
   }
  ],
  "output": [
   {
    "key": "isAssociatedWith",
    "multi": false
   },
   {
    "key": "hasOutputSubstance",
    "multi": true
   },
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "heatPump"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isMeasuredBy",
    "forCanonicals": [
     {
      "name": "electricMeter",
      "multi": true
     },
     {
      "name": "energyMeter",
      "multi": true
     },
     {
      "name": "waterMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isFedBy",
    "forCanonicals": [
     {
      "name": "chilledWaterSystem",
      "multi": true
     },
     {
      "name": "hotWaterSystem",
      "multi": true
     },
     {
      "name": "waterSystem",
      "multi": true
     },
     {
      "name": "condenserWaterSystem",
      "multi": true
     },
     {
      "name": "heatExchanger",
      "multi": true
     },
     {
      "name": "secLoopSystem",
      "multi": true
     },
     {
      "name": "outdoorVRF",
      "multi": true
     },
     {
      "name": "loopSystem",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "heatPump",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "heatPump",
      "multi": false
     }
    ]
   }
  ]
 },
 "pump": {
  "name": "pump",
  "type": "canonical",
  "description": "Pump",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "EQUIPMENT"
  ],
  "applies": [
   "SS",
   "PRC",
   "FRQ",
   "ANGVEL",
   "ESS",
   "WLPS",
   "OCCUPANCY",
   "VFDBYPASS",
   "STATS",
   "ALARMS"
  ],
  "validators": [],
  "input": [
   {
    "key": "isMeasuredBy",
    "multi": true
   },
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "pump"
    ]
   }
  ],
  "output": [
   {
    "key": "isPartOf",
    "multi": false,
    "forEntities": [
     "pump"
    ]
   },
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "pump"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isMeasuredBy",
    "forCanonicals": [
     {
      "name": "electricMeter",
      "multi": true
     },
     {
      "name": "waterMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isPartOf",
    "forCanonicals": [
     {
      "name": "hotWaterSystem",
      "multi": true
     },
     {
      "name": "condenserWaterSystem",
      "multi": true
     },
     {
      "name": "chilledWaterSystem",
      "multi": true
     },
     {
      "name": "waterSystem",
      "multi": true
     },
     {
      "name": "waterTank",
      "multi": true
     },
     {
      "name": "snowMelt",
      "multi": true
     },
     {
      "name": "loopSystem",
      "multi": true
     },
     {
      "name": "secLoopSystem",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "pump",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "pump",
      "multi": false
     }
    ]
   }
  ]
 },
 "boosterPump": {
  "name": "boosterPump",
  "type": "canonical",
  "description": "Booster Pump",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "EQUIPMENT",
   "PUM"
  ],
  "applies": [
   "SPG",
   "WLPS",
   "OPM",
   "ALARMS",
   "OCCUPANCY",
   "LEADLAG"
  ],
  "validators": [],
  "input": [
   {
    "key": "isMeasuredBy",
    "multi": true
   },
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "boosterPump"
    ]
   }
  ],
  "output": [
   {
    "key": "isPartOf",
    "multi": false,
    "forEntities": [
     "boosterPump"
    ]
   },
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "boosterPump"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isMeasuredBy",
    "forCanonicals": [
     {
      "name": "electricMeter",
      "multi": true
     },
     {
      "name": "waterMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isPartOf",
    "forCanonicals": [
     {
      "name": "waterSystem",
      "multi": true
     },
     {
      "name": "waterTank",
      "multi": true
     },
     {
      "name": "loopSystem",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "boosterPump",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "boosterPump",
      "multi": false
     }
    ]
   }
  ]
 },
 "fan": {
  "name": "fan",
  "type": "canonical",
  "description": "Fan",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "EQUIPMENT"
  ],
  "applies": [
   "ESS",
   "SS",
   "SC",
   "PRC",
   "FRQ",
   "ANGVEL",
   "ZTSS",
   "OTSS",
   "DDSS",
   "EDSS",
   "ODSS",
   "DAFSC",
   "EAFSC",
   "OAFSC",
   "DAPSS",
   "STATS",
   "VFDBYPASS",
   "OCCUPANCY",
   "ALARMS",
   "FLTSTATS"
  ],
  "validators": [],
  "input": [
   {
    "key": "isMeasuredBy",
    "multi": false
   },
   {
    "key": "isMeasuredBy",
    "multi": true
   },
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "fan"
    ]
   }
  ],
  "output": [
   {
    "key": "hasLocation",
    "multi": false
   },
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "fan"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isMeasuredBy",
    "forCanonicals": [
     {
      "name": "electricMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isPartOf",
    "forCanonicals": [
     {
      "name": "ahu",
      "multi": true
     },
     {
      "name": "coolingTower",
      "multi": true
     }
    ]
   },
   {
    "key": "isFedBy",
    "forCanonicals": [
     {
      "name": "ahu",
      "multi": true
     },
     {
      "name": "fcu",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "fan",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "fan",
      "multi": false
     }
    ]
   },
   {
    "key": "feeds",
    "forCanonicals": [
     {
      "name": "fcu",
      "multi": true
     },
     {
      "name": "ahu",
      "multi": true
     }
    ]
   }
  ]
 },
 "coolingTower": {
  "name": "coolingTower",
  "type": "canonical",
  "description": "Cooling Tower",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "HVAC",
   "CDWLT",
   "CFM"
  ],
  "applies": [
   "CDWG",
   "CFG",
   "SUMP",
   "BYPASSVALVE",
   "SS",
   "OTSS",
   "OCCUPANCY",
   "STATS",
   "ALARMS"
  ],
  "validators": [
   "IS_CDWELT_OR_CDWLTS"
  ],
  "input": [
   {
    "key": "isLocationOf",
    "multi": true
   },
   {
    "key": "hasPart",
    "multi": true
   },
   {
    "key": "isMeasuredBy",
    "multi": true
   },
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "coolingTower"
    ]
   }
  ],
  "output": [
   {
    "key": "isAssociatedWith",
    "multi": false
   },
   {
    "key": "hasOutputSubstance",
    "multi": true
   },
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "coolingTower"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isMeasuredBy",
    "forCanonicals": [
     {
      "name": "electricMeter",
      "multi": true
     },
     {
      "name": "energyMeter",
      "multi": true
     },
     {
      "name": "waterMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isPartOf",
    "forCanonicals": [
     {
      "name": "condenserWaterSystem",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "coolingTower",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "coolingTower",
      "multi": false
     }
    ]
   },
   {
    "key": "hasPart",
    "forCanonicals": [
     {
      "name": "fan",
      "multi": true
     }
    ]
   }
  ]
 },
 "heatExchanger": {
  "name": "heatExchanger",
  "type": "canonical",
  "description": "Heat Exchanger",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "EQUIPMENT",
   "SLELTS",
   "SLPM"
  ],
  "applies": [
   "ALARMS",
   "PLOOP",
   "SLOOP",
   "OTSS"
  ],
  "validators": [
   "IS_PLET_OR_PLVM"
  ],
  "input": [
   {
    "key": "hasInputSubstance",
    "multi": false,
    "forEntities": [
     "heatExchanger"
    ]
   },
   {
    "key": "hasPart",
    "multi": true
   },
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "heatExchanger"
    ]
   }
  ],
  "output": [
   {
    "key": "hasOutputSubstance",
    "multi": true,
    "forEntities": [
     "heatExchanger"
    ]
   },
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "heatExchanger"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isMeasuredBy",
    "forCanonicals": [
     {
      "name": "electricMeter",
      "multi": true
     },
     {
      "name": "energyMeter",
      "multi": true
     },
     {
      "name": "waterMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isPartOf",
    "forCanonicals": [
     {
      "name": "hotWaterSystem",
      "multi": true
     },
     {
      "name": "condenserWaterSystem",
      "multi": true
     },
     {
      "name": "chilledWaterSystem",
      "multi": true
     },
     {
      "name": "waterSystem",
      "multi": true
     },
     {
      "name": "loopSystem",
      "multi": true
     },
     {
      "name": "secLoopSystem",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "heatExchanger",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "heatExchanger",
      "multi": false
     }
    ]
   },
   {
    "key": "feeds",
    "forCanonicals": [
     {
      "name": "heatPump",
      "multi": true
     },
     {
      "name": "fcu",
      "multi": true
     },
     {
      "name": "ahu",
      "multi": true
     },
     {
      "name": "radiantDevice",
      "multi": true
     }
    ]
   }
  ]
 },
 "loopSystem": {
  "name": "loopSystem",
  "type": "canonical",
  "description": "Loop System",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "EQUIPMENT",
   "LOOP"
  ],
  "applies": [
   "LOOP",
   "ESS",
   "BYPASSVALVE",
   "OTSS",
   "SS",
   "OCCUPANCY",
   "STATS",
   "SLOOP",
   "ALARMS",
   "CHWSYSTEM",
   "HWSYSTEM",
   "DSM"
  ],
  "validators": [
   "IS_PLELTS_OR_PLETS"
  ],
  "input": [
   {
    "key": "hasAssociatedTag",
    "multi": true,
    "forEntities": [
     "loopSystem"
    ]
   },
   {
    "key": "hasPart",
    "multi": true
   },
   {
    "key": "isMeasuredBy",
    "multi": true
   },
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "loopSystem"
    ]
   },
   {
    "key": "hasInputSubstance",
    "multi": true,
    "forEntities": [
     "loopSystem"
    ]
   }
  ],
  "output": [
   {
    "key": "hasOutputSubstance",
    "multi": true,
    "forEntities": [
     "loopSystem"
    ]
   },
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "loopSystem"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isMeasuredBy",
    "forCanonicals": [
     {
      "name": "electricMeter",
      "multi": true
     },
     {
      "name": "energyMeter",
      "multi": true
     },
     {
      "name": "waterMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "loopSystem",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "feeds",
    "forCanonicals": [
     {
      "name": "secLoopSystem",
      "multi": true
     },
     {
      "name": "ahu",
      "multi": true
     },
     {
      "name": "cav",
      "multi": true
     },
     {
      "name": "fcu",
      "multi": true
     },
     {
      "name": "heatPump",
      "multi": true
     },
     {
      "name": "radiantDevice",
      "multi": true
     },
     {
      "name": "snowMelt",
      "multi": true
     },
     {
      "name": "uh",
      "multi": true
     },
     {
      "name": "vav",
      "multi": true
     }
    ]
   },
   {
    "key": "hasPart",
    "forCanonicals": [
     {
      "name": "boiler",
      "multi": true
     },
     {
      "name": "boosterPump",
      "multi": true
     },
     {
      "name": "chiller",
      "multi": true
     },
     {
      "name": "heatExchanger",
      "multi": true
     },
     {
      "name": "pump",
      "multi": true
     },
     {
      "name": "waterTank",
      "multi": true
     }
    ]
   },
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "loopSystem",
      "multi": false
     }
    ]
   }
  ]
 },
 "secLoopSystem": {
  "name": "secLoopSystem",
  "type": "canonical",
  "description": "Secondary Loop System",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "EQUIPMENT",
   "LOOP"
  ],
  "applies": [
   "LOOP",
   "ESS",
   "BYPASSVALVE",
   "OTSS",
   "SS",
   "ALARMS"
  ],
  "validators": [
   "IS_PLELTS_OR_PLETS"
  ],
  "input": [
   {
    "key": "hasInputSubstance",
    "multi": false,
    "forEntities": [
     "secLoopSystem"
    ]
   },
   {
    "key": "isMeasuredBy",
    "multi": true
   },
   {
    "key": "hasPart",
    "multi": true
   },
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "secLoopSystem"
    ]
   }
  ],
  "output": [
   {
    "key": "hasOutputSubstance",
    "multi": true,
    "forEntities": [
     "secLoopSystem"
    ]
   },
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "secLoopSystem"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isFedBy",
    "forCanonicals": [
     {
      "name": "loopSystem",
      "multi": true
     }
    ]
   },
   {
    "key": "isMeasuredBy",
    "forCanonicals": [
     {
      "name": "electricMeter",
      "multi": true
     },
     {
      "name": "waterMeter",
      "multi": true
     },
     {
      "name": "energyMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "secLoopSystem",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "feeds",
    "forCanonicals": [
     {
      "name": "ahu",
      "multi": true
     },
     {
      "name": "cav",
      "multi": true
     },
     {
      "name": "fcu",
      "multi": true
     },
     {
      "name": "heatPump",
      "multi": true
     },
     {
      "name": "radiantDevice",
      "multi": true
     },
     {
      "name": "snowMelt",
      "multi": true
     },
     {
      "name": "uh",
      "multi": true
     },
     {
      "name": "vav",
      "multi": true
     }
    ]
   },
   {
    "key": "hasPart",
    "forCanonicals": [
     {
      "name": "heatExchanger",
      "multi": true
     },
     {
      "name": "pump",
      "multi": true
     },
     {
      "name": "waterTank",
      "multi": true
     }
    ]
   },
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "secLoopSystem",
      "multi": false
     }
    ]
   }
  ]
 },
 "humidifier": {
  "name": "humidifier",
  "type": "canonical",
  "description": "Humidifier",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "EQUIPMENT"
  ],
  "applies": [
   "HUMC",
   "DHUMC",
   "RCTTSS",
   "BYPD",
   "DAHSS",
   "ZHSS",
   "HUMOUT",
   "HUMTANK",
   "ALARMS"
  ],
  "validators": [
   "IS_HUMC_OR_DHUMC"
  ],
  "input": [
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "humidifier"
    ]
   }
  ],
  "output": [
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "humidifier"
    ]
   },
   {
    "key": "hasLocation",
    "multi": false
   }
  ],
  "canonicalInputs": [
   {
    "key": "isMeasuredBy",
    "forCanonicals": [
     {
      "name": "electricMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "humidifier",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "humidifier",
      "multi": false
     }
    ]
   }
  ]
 },
 "waterTank": {
  "name": "waterTank",
  "type": "canonical",
  "description": "Water Tank System",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "METER",
   "SPLM"
  ],
  "applies": [
   "TANKMONITORING",
   "TTSS",
   "SPLM",
   "WLPS",
   "WFM",
   "BYPASSVALVE",
   "VALVE",
   "OPM",
   "ALARMS",
   "CONNECTION",
   "HTGC",
   "WCLSS",
   "REDOXS",
   "WPSS",
   "PHMONITORING"
  ],
  "validators": [],
  "input": [
   {
    "key": "hasPart",
    "multi": true
   },
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "waterTank"
    ]
   }
  ],
  "output": [
   {
    "key": "hasOutputSubstance",
    "multi": true
   },
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "waterTank"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isPartOf",
    "forCanonicals": [
     {
      "name": "waterSystem",
      "multi": true
     },
     {
      "name": "chilledWaterSystem",
      "multi": true
     },
     {
      "name": "hotWaterSystem",
      "multi": true
     },
     {
      "name": "condenserWaterSystem",
      "multi": true
     },
     {
      "name": "loopSystem",
      "multi": true
     },
     {
      "name": "secLoopSystem",
      "multi": true
     }
    ]
   },
   {
    "key": "isMeasuredBy",
    "forCanonicals": [
     {
      "name": "electricMeter",
      "multi": true
     },
     {
      "name": "waterMeter",
      "multi": true
     },
     {
      "name": "energyMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "waterTank",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "hasPart",
    "forCanonicals": [
     {
      "name": "pump",
      "multi": true
     },
     {
      "name": "boosterPump",
      "multi": true
     }
    ]
   },
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "waterTank",
      "multi": false
     }
    ]
   }
  ]
 },
 "snowMelt": {
  "name": "snowMelt",
  "type": "canonical",
  "description": "Snowmelt",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "SLELTS",
   "SLPM",
   "EQUIPMENT"
  ],
  "applies": [
   "SLOOP",
   "PLOOP",
   "HTGC",
   "OTSS",
   "SMMODE",
   "DM",
   "SLAB",
   "STATS",
   "ALARMS"
  ],
  "validators": [],
  "input": [
   {
    "key": "hasInputSubstance",
    "multi": true,
    "forEntities": [
     "snowMelt"
    ]
   },
   {
    "key": "hasPart",
    "multi": true
   },
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "snowMelt"
    ]
   }
  ],
  "output": [
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "snowMelt"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isFedBy",
    "forCanonicals": [
     {
      "name": "hotWaterSystem",
      "multi": true
     },
     {
      "name": "waterSystem",
      "multi": true
     },
     {
      "name": "secLoopSystem",
      "multi": true
     },
     {
      "name": "loopSystem",
      "multi": true
     }
    ]
   },
   {
    "key": "isMeasuredBy",
    "forCanonicals": [
     {
      "name": "electricMeter",
      "multi": true
     },
     {
      "name": "waterMeter",
      "multi": true
     },
     {
      "name": "energyMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "snowMelt",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "hasPart",
    "forCanonicals": [
     {
      "name": "pump",
      "multi": true
     }
    ]
   },
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "snowMelt",
      "multi": false
     }
    ]
   }
  ]
 },
 "outdoorVRF": {
  "name": "outdoorVRF",
  "type": "canonical",
  "description": "Outdoor Unit Variable Refrigerant Flow",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "CUM",
   "HVAC",
   "HVACOPM"
  ],
  "applies": [
   "ODUM",
   "HVACC",
   "OTS",
   "DM",
   "OPM",
   "ORM",
   "STATS",
   "SS",
   "OCCUPANCY",
   "ALARMS"
  ],
  "validators": [],
  "input": [
   {
    "key": "isLocationOf",
    "multi": true
   },
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "outdoorVRF"
    ]
   }
  ],
  "output": [
   {
    "key": "hasOutputSubstance",
    "multi": true,
    "forEntities": [
     "outdoorVRF"
    ]
   },
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "outdoorVRF"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isMeasuredBy",
    "forCanonicals": [
     {
      "name": "electricMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "outdoorVRF",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "feeds",
    "forCanonicals": [
     {
      "name": "fcu",
      "multi": true
     },
     {
      "name": "ahu",
      "multi": true
     },
     {
      "name": "heatPump",
      "multi": true
     }
    ]
   },
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "outdoorVRF",
      "multi": false
     }
    ]
   }
  ]
 },
 "fire": {
  "name": "fire",
  "type": "canonical",
  "description": "Fire Device",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "METER"
  ],
  "applies": [
   "FIRE",
   "CONNECTION"
  ],
  "validators": [
   "IS_FIREBYPASS_OR_FIRESUPVR_OR_FA_OR_FF"
  ],
  "input": [
   {
    "key": "isRegulatedBy",
    "multi": false
   },
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "fire"
    ]
   }
  ],
  "output": [
   {
    "key": "regulates",
    "multi": true
   },
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "fire"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isMeasuredBy",
    "forCanonicals": [
     {
      "name": "electricMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "fire",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "fire",
      "multi": false
     }
    ]
   }
  ]
 },
 "gasMeter": {
  "name": "gasMeter",
  "type": "canonical",
  "description": "Gas Meter",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "GASTEMP",
   "METER"
  ],
  "applies": [
   "GASTEMP",
   "VOLUMETRICFLOWRATE",
   "VOLUMETRICFLOW",
   "ENERGYFLOWRATE",
   "ENERGYFLOW",
   "STATS",
   "ALARMS",
   "CONNECTION"
  ],
  "validators": [
   "IS_VOLUMETRICFLOWRATE_OR_ENERGYFLOWRATE"
  ],
  "input": [
   {
    "key": "isSubmeterOf",
    "multi": false
   },
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "gasMeter"
    ]
   }
  ],
  "output": [
   {
    "key": "measures",
    "multi": true
   },
   {
    "key": "hasSubMeter",
    "multi": true
   },
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "gasMeter"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isSubmeterOf",
    "forCanonicals": [
     {
      "name": "gasMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "gasMeter",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "measures",
    "forCanonicals": [
     {
      "name": "boiler",
      "multi": true
     },
     {
      "name": "generator",
      "multi": true
     }
    ]
   },
   {
    "key": "hasSubMeter",
    "forCanonicals": [
     {
      "name": "gasMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "gasMeter",
      "multi": false
     }
    ]
   }
  ]
 },
 "steamMeter": {
  "name": "steamMeter",
  "type": "canonical",
  "description": "Steam Meter",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "STEAMTEMP",
   "METER"
  ],
  "applies": [
   "STEAMTEMP",
   "STEAMPRESS",
   "VOLUMETRICFLOWRATE",
   "MASSFLOWRATE",
   "VOLUMETRICFLOW",
   "MASSFLOW",
   "CONNECTION"
  ],
  "validators": [
   "IS_VOLUMETRICFLOWRATE_OR_MASSFLOWRATE"
  ],
  "input": [
   {
    "key": "isSubmeterOf",
    "multi": false
   },
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "steamMeter"
    ]
   }
  ],
  "output": [
   {
    "key": "measures",
    "multi": true
   },
   {
    "key": "hasSubMeter",
    "multi": true
   },
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "steamMeter"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isSubmeterOf",
    "forCanonicals": [
     {
      "name": "steamMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "steamMeter",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "hasSubMeter",
    "forCanonicals": [
     {
      "name": "steamMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "measures",
    "forCanonicals": [
     {
      "name": "boiler",
      "multi": true
     }
    ]
   },
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "steamMeter",
      "multi": false
     }
    ]
   }
  ]
 },
 "waterMeter": {
  "name": "waterMeter",
  "type": "canonical",
  "description": "Water Meter",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "VOLUMETRICFLOWRATE",
   "METER"
  ],
  "applies": [
   "VOLUMETRICFLOW",
   "VOLUMETRICFLOWRATE",
   "CONNECTION"
  ],
  "validators": [],
  "input": [
   {
    "key": "isSubmeterOf",
    "multi": false
   },
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "waterMeter"
    ]
   }
  ],
  "output": [
   {
    "key": "measures",
    "multi": true
   },
   {
    "key": "hasSubMeter",
    "multi": true
   },
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "waterMeter"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isSubmeterOf",
    "forCanonicals": [
     {
      "name": "waterMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "waterMeter",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "measures",
    "forCanonicals": [
     {
      "name": "boiler",
      "multi": true
     },
     {
      "name": "chiller",
      "multi": true
     },
     {
      "name": "coolingTower",
      "multi": true
     },
     {
      "name": "heatExchanger",
      "multi": true
     },
     {
      "name": "heatPump",
      "multi": true
     },
     {
      "name": "radiantDevice",
      "multi": true
     },
     {
      "name": "snowMelt",
      "multi": true
     },
     {
      "name": "uh",
      "multi": true
     },
     {
      "name": "waterTank",
      "multi": true
     },
     {
      "name": "loopSystem",
      "multi": true
     },
     {
      "name": "secLoopSystem",
      "multi": true
     },
     {
      "name": "chilledWaterSystem",
      "multi": true
     },
     {
      "name": "hotWaterSystem",
      "multi": true
     },
     {
      "name": "waterSystem",
      "multi": true
     },
     {
      "name": "pump",
      "multi": true
     },
     {
      "name": "boosterPump",
      "multi": true
     },
     {
      "name": "leakDetection",
      "multi": true
     }
    ]
   },
   {
    "key": "hasSubMeter",
    "forCanonicals": [
     {
      "name": "waterMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "waterMeter",
      "multi": false
     }
    ]
   }
  ]
 },
 "energyMeter": {
  "name": "energyMeter",
  "type": "canonical",
  "description": "Energy Meter",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "METER"
  ],
  "applies": [
   "VOLUMETRICFLOW",
   "ENERGYFLOW",
   "VOLUMETRICFLOWRATECONTROL",
   "ENERGYFLOWRATECONTROL",
   "SUPPLYRETURNTEMPERATURE",
   "COOLINGENERGYFLOW",
   "HEATINGENERGYFLOW",
   "VALVE",
   "OPM",
   "STATS",
   "ALARMS",
   "CONNECTION",
   "WLPS"
  ],
  "validators": [
   "IS_VOLUMETRICFLOWRATE_OR_ENERGYFLOWRATE"
  ],
  "input": [
   {
    "key": "isSubmeterOf",
    "multi": false
   },
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "energyMeter"
    ]
   }
  ],
  "output": [
   {
    "key": "measures",
    "multi": true
   },
   {
    "key": "hasSubMeter",
    "multi": true
   },
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "energyMeter"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isSubmeterOf",
    "forCanonicals": [
     {
      "name": "energyMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "energyMeter",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "hasSubMeter",
    "forCanonicals": [
     {
      "name": "energyMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "measures",
    "forCanonicals": [
     {
      "name": "ahu",
      "multi": true
     },
     {
      "name": "boiler",
      "multi": true
     },
     {
      "name": "chiller",
      "multi": true
     },
     {
      "name": "coolingTower",
      "multi": true
     },
     {
      "name": "fcu",
      "multi": true
     },
     {
      "name": "heatExchanger",
      "multi": true
     },
     {
      "name": "heatPump",
      "multi": true
     },
     {
      "name": "radiantDevice",
      "multi": true
     },
     {
      "name": "snowMelt",
      "multi": true
     },
     {
      "name": "uh",
      "multi": true
     },
     {
      "name": "waterTank",
      "multi": true
     },
     {
      "name": "loopSystem",
      "multi": true
     },
     {
      "name": "secLoopSystem",
      "multi": true
     },
     {
      "name": "chilledWaterSystem",
      "multi": true
     },
     {
      "name": "hotWaterSystem",
      "multi": true
     },
     {
      "name": "waterSystem",
      "multi": true
     }
    ]
   },
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "energyMeter",
      "multi": false
     }
    ]
   }
  ]
 },
 "leakDetection": {
  "name": "leakDetection",
  "type": "canonical",
  "description": "General Leak Detection System",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "METER"
  ],
  "applies": [
   "ALARMS",
   "PANELTEMP",
   "BATTERYSTS",
   "BATTERYLVL",
   "VALVE",
   "CONNECTION",
   "LDR",
   "LDV",
   "WDM"
  ],
  "validators": [
   "IS_LPAL_OR_MPAL_OR_HPAL"
  ],
  "input": [
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "leakDetection"
    ]
   }
  ],
  "output": [
   {
    "key": "measures",
    "multi": true
   },
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "leakDetection"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isMeasuredBy",
    "forCanonicals": [
     {
      "name": "electricMeter",
      "multi": true
     },
     {
      "name": "waterMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "leakDetection",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "leakDetection",
      "multi": false
     }
    ]
   }
  ]
 },
 "airQuality": {
  "name": "airQuality",
  "type": "canonical",
  "description": "Air Quality Measuring Device",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "METER",
   "AQM"
  ],
  "applies": [
   "ZONESMONITORING",
   "BATTERYLVL",
   "EFSTAGE",
   "EFSS",
   "CO2",
   "NO2",
   "NO",
   "CO",
   "GAS",
   "REFRIGERANT",
   "HCHO",
   "NH3",
   "O3",
   "PM1",
   "PM4",
   "PM25",
   "PM10",
   "TVOC",
   "SOUND",
   "LIGHT",
   "SATISFACTION",
   "EDSS",
   "ZNSPS",
   "AIRCHANGES",
   "CONNECTION",
   "WINDOWSTS",
   "ALARMS",
   "CO2P",
   "O2P",
   "NSS",
   "ZCO2S"
  ],
  "validators": [],
  "input": [
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "airQuality"
    ]
   }
  ],
  "output": [
   {
    "key": "regulates",
    "multi": true
   },
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "airQuality"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isMeasuredBy",
    "forCanonicals": [
     {
      "name": "electricMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "airQuality",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "airQuality",
      "multi": false
     }
    ]
   }
  ]
 },
 "thermohygrometer": {
  "name": "thermohygrometer",
  "type": "canonical",
  "description": "Thermo and Hygrometer",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "METER"
  ],
  "applies": [
   "ZONESMONITORING",
   "WINDOWSTS",
   "ALARMS",
   "CONNECTION"
  ],
  "validators": [],
  "input": [
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "thermohygrometer"
    ]
   }
  ],
  "output": [
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "thermohygrometer"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isMeasuredBy",
    "forCanonicals": [
     {
      "name": "electricMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "thermohygrometer",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "thermohygrometer",
      "multi": false
     }
    ]
   }
  ]
 },
 "electricMeter": {
  "name": "electricMeter",
  "type": "canonical",
  "description": "Electric Meter",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "METER",
   "ENERGYMONITORING",
   "OUTPUTPOWERMONITORING"
  ],
  "applies": [
   "ENERGYMONITORING",
   "PEAKDEMANDMONITORING",
   "OUTPUTLINE",
   "CONNECTION",
   "ENERGYIMPEXPTOTAL",
   "ELECFRCST",
   "ALARMS"
  ],
  "validators": [],
  "input": [
   {
    "key": "isSubmeterOf",
    "multi": false
   },
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "electricMeter"
    ]
   }
  ],
  "output": [
   {
    "key": "measures",
    "multi": true
   },
   {
    "key": "hasSubMeter",
    "multi": true
   },
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "electricMeter"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "electricMeter",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "measures",
    "forCanonicals": [
     {
      "name": "secondaryPump",
      "multi": true
     },
     {
      "name": "primaryPump",
      "multi": true
     },
     {
      "name": "waterSystem",
      "multi": true
     },
     {
      "name": "hotWaterSystem",
      "multi": true
     },
     {
      "name": "zone",
      "multi": true
     },
     {
      "name": "airCompressor",
      "multi": true
     },
     {
      "name": "computerDevice",
      "multi": true
     },
     {
      "name": "networkingDevice",
      "multi": true
     },
     {
      "name": "av",
      "multi": true
     },
     {
      "name": "soilMonitoring",
      "multi": true
     },
     {
      "name": "chargingStation",
      "multi": true
     },
     {
      "name": "camera",
      "multi": true
     },
     {
      "name": "externalWeather",
      "multi": true
     },
     {
      "name": "IOREADER",
      "multi": true
     },
     {
      "name": "sanitation",
      "multi": true
     },
     {
      "name": "wasteCollector",
      "multi": true
     },
     {
      "name": "smartLocker",
      "multi": true
     },
     {
      "name": "doorLock",
      "multi": true
     },
     {
      "name": "trafficCounter",
      "multi": true
     },
     {
      "name": "presenceDetection",
      "multi": true
     },
     {
      "name": "lighting",
      "multi": true
     },
     {
      "name": "switchGear",
      "multi": true
     },
     {
      "name": "solarPanel",
      "multi": true
     },
     {
      "name": "elevator",
      "multi": true
     },
     {
      "name": "blinds",
      "multi": true
     },
     {
      "name": "bridge",
      "multi": true
     },
     {
      "name": "generator",
      "multi": true
     },
     {
      "name": "pdu",
      "multi": true
     },
     {
      "name": "ups",
      "multi": true
     },
     {
      "name": "electricityMonitoring",
      "multi": true
     },
     {
      "name": "thermohygrometer",
      "multi": true
     },
     {
      "name": "airQuality",
      "multi": true
     },
     {
      "name": "leakDetection",
      "multi": true
     },
     {
      "name": "fire",
      "multi": true
     },
     {
      "name": "outdoorVRF",
      "multi": true
     },
     {
      "name": "snowMelt",
      "multi": true
     },
     {
      "name": "waterTank",
      "multi": true
     },
     {
      "name": "humidifier",
      "multi": true
     },
     {
      "name": "secLoopSystem",
      "multi": true
     },
     {
      "name": "loopSystem",
      "multi": true
     },
     {
      "name": "heatExchanger",
      "multi": true
     },
     {
      "name": "coolingTower",
      "multi": true
     },
     {
      "name": "fan",
      "multi": true
     },
     {
      "name": "boosterPump",
      "multi": true
     },
     {
      "name": "pump",
      "multi": true
     },
     {
      "name": "heatPump",
      "multi": true
     },
     {
      "name": "chiller",
      "multi": true
     },
     {
      "name": "boiler",
      "multi": true
     },
     {
      "name": "uh",
      "multi": true
     },
     {
      "name": "fcu",
      "multi": true
     },
     {
      "name": "ahu",
      "multi": true
     },
     {
      "name": "cav",
      "multi": true
     }
    ]
   },
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "electricMeter",
      "multi": false
     }
    ]
   }
  ]
 },
 "electricityMonitoring": {
  "name": "electricityMonitoring",
  "type": "canonical",
  "description": "Electrical Flow Monitoring",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "HPAL",
   "METER"
  ],
  "applies": [
   "ALARMS",
   "CONNECTION"
  ],
  "validators": [],
  "input": [
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "electricityMonitoring"
    ]
   }
  ],
  "output": [
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "electricityMonitoring"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isMeasuredBy",
    "forCanonicals": [
     {
      "name": "electricMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "electricityMonitoring",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "electricityMonitoring",
      "multi": false
     }
    ]
   }
  ]
 },
 "ups": {
  "name": "ups",
  "type": "canonical",
  "description": "Uninterruptible Power Supply",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "BYPASSFREQMONITORING",
   "INPUTFREQMONITORING",
   "EXTSRCFREQMONITORING",
   "OUTPUTVCMONITORING",
   "EQUIPMENT"
  ],
  "applies": [
   "OUTPUTLINE",
   "INPUTLINE",
   "BYPASSLINE",
   "EXTERNALSOURCE",
   "OUTPUTSOURCE",
   "INLETTEMPERATURE",
   "PRC",
   "SS",
   "ALARMS"
  ],
  "validators": [],
  "input": [
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "ups"
    ]
   }
  ],
  "output": [
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "ups"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isMeasuredBy",
    "forCanonicals": [
     {
      "name": "electricMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "ups",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "ups",
      "multi": false
     }
    ]
   }
  ]
 },
 "pdu": {
  "name": "pdu",
  "type": "canonical",
  "description": "Power Distribution Unit",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "OUTPUTPOWERMONITORING",
   "INPUTPHASEVCMONITORING",
   "EQUIPMENT"
  ],
  "applies": [
   "OUTPUTLINE",
   "INPUTLINE",
   "ENERGYMONITORING",
   "PEAKDEMANDMONITORING",
   "SS",
   "ALARMS"
  ],
  "validators": [],
  "input": [
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "pdu"
    ]
   }
  ],
  "output": [
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "pdu"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isMeasuredBy",
    "forCanonicals": [
     {
      "name": "electricMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "pdu",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "pdu",
      "multi": false
     }
    ]
   }
  ]
 },
 "generator": {
  "name": "generator",
  "type": "canonical",
  "description": "Generator",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "OUTPUTPOWERMONITORING",
   "EQUIPMENT"
  ],
  "applies": [
   "OUTPUTLINE",
   "BATTERY",
   "COOLANT",
   "ANGVEL",
   "FUEL",
   "OILPRESSURE",
   "OPM",
   "SS",
   "DSM",
   "STATS",
   "ALARMS"
  ],
  "validators": [],
  "input": [
   {
    "key": "hasPart",
    "multi": true
   },
   {
    "key": "isMeasuredBy",
    "multi": true
   },
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "generator"
    ]
   }
  ],
  "output": [
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "generator"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isMeasuredBy",
    "forCanonicals": [
     {
      "name": "electricMeter",
      "multi": true
     },
     {
      "name": "gasMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "generator",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "generator",
      "multi": false
     }
    ]
   }
  ]
 },
 "bridge": {
  "name": "bridge",
  "type": "canonical",
  "description": "Bridge device that controls other devices",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "GATEWAY",
   "CONNECTION"
  ],
  "applies": [
   "CONNECTION"
  ],
  "validators": [],
  "input": [
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "bridge"
    ]
   }
  ],
  "output": [
   {
    "key": "regulates",
    "multi": true
   },
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "bridge"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isMeasuredBy",
    "forCanonicals": [
     {
      "name": "electricMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "bridge",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "bridge",
      "multi": false
     }
    ]
   }
  ]
 },
 "blinds": {
  "name": "blinds",
  "type": "canonical",
  "description": "Blinds",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "EQUIPMENT"
  ],
  "applies": [
   "SS",
   "PRC",
   "TILT",
   "CONNECTION",
   "LPAL",
   "MPAL",
   "HPAL",
   "BATTERYLVL",
   "ZTS"
  ],
  "validators": [],
  "input": [
   {
    "key": "isRegulatedBy",
    "multi": false
   },
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "blinds"
    ]
   }
  ],
  "output": [
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "blinds"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isMeasuredBy",
    "forCanonicals": [
     {
      "name": "electricMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "blinds",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "blinds",
      "multi": false
     }
    ]
   }
  ]
 },
 "elevator": {
  "name": "elevator",
  "type": "canonical",
  "description": "Elevator",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "EQUIPMENT"
  ],
  "applies": [
   "SS",
   "OPM",
   "DOORSTS",
   "CONNECTION",
   "CONTAINERLOAD",
   "PROCESSCOUNT",
   "FLOORPOSITION",
   "LPAL",
   "MPAL",
   "HPAL"
  ],
  "validators": [],
  "input": [
   {
    "key": "isMeasuredBy",
    "multi": false
   },
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "elevator"
    ]
   }
  ],
  "output": [
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "elevator"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isMeasuredBy",
    "forCanonicals": [
     {
      "name": "electricMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "elevator",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "elevator",
      "multi": false
     }
    ]
   }
  ]
 },
 "solarPanel": {
  "name": "solarPanel",
  "type": "canonical",
  "description": "Solar Panel",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "OUTPUTPOWERMONITORING",
   "DCVOLTAGE",
   "EQUIPMENT"
  ],
  "applies": [
   "DCVOLTAGE",
   "OUTPUTLINE",
   "ENERGYMONITORING",
   "SOLARINVERTER",
   "DCCURRENT",
   "ENERGYFLOWRATE"
  ],
  "validators": [],
  "input": [
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "solarPanel"
    ]
   }
  ],
  "output": [
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "solarPanel"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isMeasuredBy",
    "forCanonicals": [
     {
      "name": "electricMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "solarPanel",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "solarPanel",
      "multi": false
     }
    ]
   }
  ]
 },
 "switchGear": {
  "name": "switchGear",
  "type": "canonical",
  "description": "SwitchGear",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "OUTPUTPHASEVCMONITORING",
   "EQUIPMENT"
  ],
  "applies": [
   "OUTPUTLINE",
   "ENERGYMONITORING"
  ],
  "validators": [],
  "input": [
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "switchGear"
    ]
   }
  ],
  "output": [
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "switchGear"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isMeasuredBy",
    "forCanonicals": [
     {
      "name": "electricMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "switchGear",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "switchGear",
      "multi": false
     }
    ]
   }
  ]
 },
 "lighting": {
  "name": "lighting",
  "type": "canonical",
  "description": "Lighting",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "EQUIPMENT"
  ],
  "applies": [
   "LIGHT",
   "LIGHTINGUNIT",
   "OCCUPANCYINDICATOR",
   "PANELTEMP",
   "ALARMS",
   "CONNECTION",
   "BATTERYSTS"
  ],
  "validators": [],
  "input": [
   {
    "key": "isMeasuredBy",
    "multi": false
   },
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "lighting"
    ]
   }
  ],
  "output": [
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "lighting"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isMeasuredBy",
    "forCanonicals": [
     {
      "name": "electricMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "lighting",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "lighting",
      "multi": false
     }
    ]
   }
  ]
 },
 "presenceDetection": {
  "name": "presenceDetection",
  "type": "canonical",
  "description": "Presence Detection",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "PRESENCE",
   "METER"
  ],
  "applies": [
   "PRESENCE",
   "COUNTER",
   "CONNECTION",
   "RUTG",
   "MOTION",
   "NSS",
   "BATTERYLVL"
  ],
  "validators": [],
  "input": [
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "presenceDetection"
    ]
   }
  ],
  "output": [
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "presenceDetection"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isMeasuredBy",
    "forCanonicals": [
     {
      "name": "electricMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "presenceDetection",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "presenceDetection",
      "multi": false
     }
    ]
   }
  ]
 },
 "trafficCounter": {
  "name": "trafficCounter",
  "type": "canonical",
  "description": "Traffic Counter",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "ENTRANCECOUNTER",
   "METER"
  ],
  "applies": [
   "ENTRANCECOUNTER",
   "CONNECTION",
   "CCTR",
   "BCTR"
  ],
  "validators": [],
  "input": [
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "trafficCounter"
    ]
   }
  ],
  "output": [
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "trafficCounter"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isMeasuredBy",
    "forCanonicals": [
     {
      "name": "electricMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "trafficCounter",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "trafficCounter",
      "multi": false
     }
    ]
   }
  ]
 },
 "doorLock": {
  "name": "doorLock",
  "type": "canonical",
  "description": "Door Lock",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "EQUIPMENT",
   "LOCKSTS"
  ],
  "applies": [
   "BATTERYLVL",
   "DOORSTS",
   "LOCKSTS",
   "CONTROLLERSTS",
   "ALARMS"
  ],
  "validators": [],
  "input": [
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "doorLock"
    ]
   }
  ],
  "output": [
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "doorLock"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isMeasuredBy",
    "forCanonicals": [
     {
      "name": "electricMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "doorLock",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "doorLock",
      "multi": false
     }
    ]
   }
  ]
 },
 "smartLocker": {
  "name": "smartLocker",
  "type": "canonical",
  "description": "Smart Locker",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "EQUIPMENT",
   "ASSIGNMENTUNIT"
  ],
  "applies": [
   "ASSIGNMENTUNIT",
   "CONNECTION"
  ],
  "validators": [],
  "input": [
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "smartLocker"
    ]
   }
  ],
  "output": [
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "smartLocker"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isMeasuredBy",
    "forCanonicals": [
     {
      "name": "electricMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "smartLocker",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "smartLocker",
      "multi": false
     }
    ]
   }
  ]
 },
 "wasteCollector": {
  "name": "wasteCollector",
  "type": "canonical",
  "description": "Waste Collector Device",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "COMPONENT",
   "METER"
  ],
  "applies": [
   "COMPONENT",
   "ALARMS",
   "CONNECTION"
  ],
  "validators": [],
  "input": [
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "wasteCollector"
    ]
   }
  ],
  "output": [
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "wasteCollector"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isMeasuredBy",
    "forCanonicals": [
     {
      "name": "electricMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "wasteCollector",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "wasteCollector",
      "multi": false
     }
    ]
   }
  ]
 },
 "sanitation": {
  "name": "sanitation",
  "type": "canonical",
  "description": "Sanitation",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "DISPENSER",
   "METER"
  ],
  "applies": [
   "DISPENSER",
   "COMPONENT",
   "CONNECTION"
  ],
  "validators": [],
  "input": [
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "sanitation"
    ]
   }
  ],
  "output": [
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "sanitation"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isMeasuredBy",
    "forCanonicals": [
     {
      "name": "electricMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "sanitation",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "sanitation",
      "multi": false
     }
    ]
   }
  ]
 },
 "IOREADER": {
  "name": "IOREADER",
  "type": "canonical",
  "description": "General I/O Reader",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "METER"
  ],
  "applies": [
   "ALARMCOUNT",
   "SOLARFLUX",
   "HTGFLUX",
   "INTGLASSTEMP",
   "INSPANELTEMP",
   "INTAIRTEMP",
   "EXTAIRTEMP",
   "HEATFLUXTHERMOCOUPLE",
   "PYRANOMETER",
   "EXTGLASSTEMP",
   "WINDSPEED",
   "PYRGEOMETER",
   "UFACTOR",
   "RFACTOR",
   "DIFFERENTIALAIRTEMP",
   "ALARMS",
   "CONNECTION"
  ],
  "validators": [],
  "input": [
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "IOREADER"
    ]
   }
  ],
  "output": [
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "IOREADER"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isMeasuredBy",
    "forCanonicals": [
     {
      "name": "electricMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "IOREADER",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "IOREADER",
      "multi": false
     }
    ]
   }
  ]
 },
 "externalWeather": {
  "name": "externalWeather",
  "type": "canonical",
  "description": "External Weather",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "METER",
   "OTS"
  ],
  "applies": [
   "OTS",
   "WINDSPEED",
   "CLOUDPRECIP",
   "CONNECTION",
   "LIGHT",
   "SOLARIRRAD"
  ],
  "validators": [],
  "input": [
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "externalWeather"
    ]
   }
  ],
  "output": [
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "externalWeather"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isMeasuredBy",
    "forCanonicals": [
     {
      "name": "electricMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "externalWeather",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "externalWeather",
      "multi": false
     }
    ]
   }
  ]
 },
 "camera": {
  "name": "camera",
  "type": "canonical",
  "description": "Camera",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "EQUIPMENT"
  ],
  "applies": [
   "EQUIPMENT",
   "CONNECTION"
  ],
  "validators": [],
  "input": [
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "camera"
    ]
   }
  ],
  "output": [
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "camera"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isMeasuredBy",
    "forCanonicals": [
     {
      "name": "electricMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "camera",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "camera",
      "multi": false
     }
    ]
   }
  ]
 },
 "chargingStation": {
  "name": "chargingStation",
  "type": "canonical",
  "description": "Electric Charging Station",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "METER",
   "CHARGER"
  ],
  "applies": [
   "STATS",
   "CHARGER"
  ],
  "validators": [],
  "input": [
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "chargingStation"
    ]
   }
  ],
  "output": [
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "chargingStation"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isMeasuredBy",
    "forCanonicals": [
     {
      "name": "electricMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "chargingStation",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "chargingStation",
      "multi": false
     }
    ]
   }
  ]
 },
 "soilMonitoring": {
  "name": "soilMonitoring",
  "type": "canonical",
  "description": "Soil Monitoring Station",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "METER"
  ],
  "applies": [
   "SOILMOIST",
   "SOILTEMP",
   "SOILCONDUCT",
   "SOILRESISTANCE",
   "BATTERYSTS",
   "CONNECTION"
  ],
  "validators": [],
  "input": [
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "soilMonitoring"
    ]
   }
  ],
  "output": [
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "soilMonitoring"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isMeasuredBy",
    "forCanonicals": [
     {
      "name": "electricMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "soilMonitoring",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "soilMonitoring",
      "multi": false
     }
    ]
   }
  ]
 },
 "av": {
  "name": "av",
  "type": "canonical",
  "description": "Audio Visual System",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "EQUIPMENT",
   "SCREEN",
   "AUDIO"
  ],
  "applies": [
   "AUDIO",
   "INPUTSOURCE",
   "SCREEN"
  ],
  "validators": [],
  "input": [
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "av"
    ]
   }
  ],
  "output": [
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "av"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isMeasuredBy",
    "forCanonicals": [
     {
      "name": "electricMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "av",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "av",
      "multi": false
     }
    ]
   }
  ]
 },
 "RUTP": {
  "name": "RUTP",
  "type": "abstract",
  "description": "Tracking associated with one person class",
  "multi": false,
  "uses": [
   "total_person_commuters_count"
  ],
  "opt_uses": [
   "average_person_commuters_linearvelocity_sensor",
   "idle_person_commuters_count"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "RUTT": {
  "name": "RUTT",
  "type": "abstract",
  "description": "Tracking associated with one truck class",
  "multi": false,
  "uses": [
   "total_truck_commuters_count"
  ],
  "opt_uses": [
   "average_truck_commuters_linearvelocity_sensor",
   "idle_truck_commuters_count"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "RUTBus": {
  "name": "RUTBus",
  "type": "abstract",
  "description": "Tracking associated with one bus class",
  "multi": false,
  "uses": [
   "total_bus_commuters_count"
  ],
  "opt_uses": [
   "average_bus_commuters_linearvelocity_sensor",
   "idle_bus_commuters_count"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "RUTBic": {
  "name": "RUTBic",
  "type": "abstract",
  "description": "Tracking associated with one bicycle class",
  "multi": false,
  "uses": [
   "total_bicycle_commuters_count"
  ],
  "opt_uses": [
   "average_bicycle_commuters_linearvelocity_sensor",
   "idle_bicycle_commuters_count"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "RUTBik": {
  "name": "RUTBik",
  "type": "abstract",
  "description": "Tracking associated with one bike class",
  "multi": false,
  "uses": [
   "total_bike_commuters_count"
  ],
  "opt_uses": [
   "average_bike_commuters_linearvelocity_sensor",
   "idle_bike_commuters_count"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "RUTM": {
  "name": "RUTM",
  "type": "abstract",
  "description": "Tracking associated with one motorcycle class",
  "multi": false,
  "uses": [
   "total_motorcycle_commuters_count"
  ],
  "opt_uses": [
   "average_motorcycle_commuters_linearvelocity_sensor",
   "idle_motorcycle_commuters_count"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "RUTC": {
  "name": "RUTC",
  "type": "abstract",
  "description": "Tracking associated with one car class",
  "multi": false,
  "uses": [
   "total_car_commuters_count"
  ],
  "opt_uses": [
   "average_car_commuters_linearvelocity_sensor",
   "idle_car_commuters_count"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "RUTG": {
  "name": "RUTG",
  "type": "abstract",
  "description": "Road Tracking",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [],
  "applies": [
   "RUTP",
   "RUTT",
   "RUTBus",
   "RUTBic",
   "RUTBik",
   "RUTM",
   "RUTC"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CO2P": {
  "name": "CO2P",
  "type": "abstract",
  "description": "CO2 Percentage Monitoring",
  "multi": false,
  "uses": [
   "zone_air_co2_percentage_sensor"
  ],
  "opt_uses": [
   "low_limit_zone_air_co2_percentage_setpoint",
   "high_limit_zone_air_co2_percentage_setpoint"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "O2P": {
  "name": "O2P",
  "type": "abstract",
  "description": "O2 Percentage Monitoring",
  "multi": false,
  "uses": [
   "zone_air_o2_percentage_sensor"
  ],
  "opt_uses": [
   "low_limit_zone_air_o2_percentage_setpoint",
   "high_limit_zone_air_o2_percentage_setpoint"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "STBYDUALZTSS": {
  "name": "STBYDUALZTSS",
  "type": "abstract",
  "description": "Standby Dual Zone Temperature Control",
  "multi": false,
  "uses": [
   "zone_air_temperature_sensor",
   "standby_heating_zone_air_temperature_setpoint",
   "standby_cooling_zone_air_temperature_setpoint"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "STMPSS": {
  "name": "STMPSS",
  "type": "abstract",
  "description": "Steam Pressure Control",
  "multi": false,
  "uses": [
   "steam_pressure_setpoint"
  ],
  "opt_uses": [
   "low_limit_steam_pressure_setpoint",
   "high_limit_steam_pressure_setpoint"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "WLM": {
  "name": "WLM",
  "type": "abstract",
  "description": "Water Level Monitoring",
  "multi": false,
  "uses": [
   "water_level_sensor"
  ],
  "opt_uses": [
   "water_level_setpoint"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "FRM": {
  "name": "FRM",
  "type": "abstract",
  "description": "Firing Rate Monitoring",
  "multi": false,
  "uses": [
   "steam_demand_percentage_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CBFPRC": {
  "name": "CBFPRC",
  "type": "abstract",
  "description": "Combustion Fan Percentage Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "combustion_fan_speed_percentage_sensor",
   "combustion_fan_speed_percentage_command"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CBO2P": {
  "name": "CBO2P",
  "type": "abstract",
  "description": "Combustion O2 Percentage Monitoring",
  "multi": false,
  "uses": [
   "combustion_o2_percentage_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CBTS": {
  "name": "CBTS",
  "type": "abstract",
  "description": "Combustion Temperature Monitoring",
  "multi": false,
  "uses": [
   "combustion_air_temperature_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CBFC": {
  "name": "CBFC",
  "type": "abstract",
  "description": "Combustion Fan Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "combustion_fan_status",
   "combustion_fan_command"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "LDR": {
  "name": "LDR",
  "type": "abstract",
  "description": "Leak Detection Monitoring - Resistance",
  "multi": false,
  "uses": [
   "leak_detection_resistance_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "LDV": {
  "name": "LDV",
  "type": "abstract",
  "description": "Leak Detection Monitoring - Voltage",
  "multi": false,
  "uses": [
   "leak_detection_voltage_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "NSS": {
  "name": "NSS",
  "type": "abstract",
  "description": "Network Strength Sensing",
  "multi": false,
  "uses": [
   "signal_strength_power_sensor",
   "signal_strength_percentage_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "WDM": {
  "name": "WDM",
  "type": "abstract",
  "description": "Water Leak Detection",
  "multi": false,
  "uses": [
   "water_leak_detection_status"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "BCTR": {
  "name": "BCTR",
  "type": "abstract",
  "description": "Bike Counter",
  "multi": false,
  "uses": [
   "bike_entering_counter",
   "bike_leaving_counter"
  ],
  "opt_uses": [
   "bike_net_count"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CCTR": {
  "name": "CCTR",
  "type": "abstract",
  "description": "Car Counter",
  "multi": false,
  "uses": [
   "car_entering_counter",
   "car_leaving_counter"
  ],
  "opt_uses": [
   "car_net_count"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "PHMMX": {
  "name": "PHMMX",
  "type": "abstract",
  "description": "Pharmacy Metrics",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "mean_kinetic_temperature_sensor",
   "twelvemonthrolling_average_zone_humidity_sensor",
   "daily_average_zone_humidity_sensor"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "FLTSTATS": {
  "name": "FLTSTATS",
  "type": "abstract",
  "description": "Filter Runtime Statistics",
  "multi": false,
  "uses": [
   "filter_run_time_accumulator"
  ],
  "opt_uses": [
   "filter_run_time_setpoint"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "OCCOVR": {
  "name": "OCCOVR",
  "type": "abstract",
  "description": "Local Occupancy Override",
  "multi": false,
  "uses": [
   "user_occupancy_override_status"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "LOCALTEMPLIMIT": {
  "name": "LOCALTEMPLIMIT",
  "type": "abstract",
  "description": "Local Tstat Setpt Limits",
  "multi": false,
  "uses": [
   "high_limit_local_zone_temperature_setpoint",
   "low_limit_local_zone_temperature_setpoint"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CPRUTIL": {
  "name": "CPRUTIL",
  "type": "abstract",
  "description": "Computer Resource Utilization",
  "multi": false,
  "uses": [
   "cpu_load_percentage_sensor",
   "heap_load_percentage_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "DEVTEMPM": {
  "name": "DEVTEMPM",
  "type": "abstract",
  "description": "Device Temperature Monitoring",
  "multi": false,
  "uses": [
   "device_temperature_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CPRDRVSTS": {
  "name": "CPRDRVSTS",
  "type": "abstract",
  "description": "Drive Mounting Status",
  "multi": false,
  "uses": [
   "storagedrive_mount_status"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SOLARIRRAD": {
  "name": "SOLARIRRAD",
  "type": "abstract",
  "description": "Solar Irradiance Monitoring",
  "multi": false,
  "uses": [
   "solar_flux_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "FBDPRC": {
  "name": "FBDPRC",
  "type": "abstract",
  "description": "Face/Bypass Damper Control",
  "multi": false,
  "uses": [
   "face_bypass_damper_percentage_command"
  ],
  "opt_uses": [
   "face_bypass_damper_percentage_sensor"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "ENERGYIMPEXPTOTAL": {
  "name": "ENERGYIMPEXPTOTAL",
  "type": "abstract",
  "description": "Total Energy Grid Import/Export",
  "multi": false,
  "uses": [
   "total_import_energy_accumulator",
   "total_export_energy_accumulator"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "BATTIOCHARGETOTAL": {
  "name": "BATTIOCHARGETOTAL",
  "type": "abstract",
  "description": "Total Battery Energy In/Out",
  "multi": false,
  "uses": [
   "total_input_battery_energy_accumulator",
   "total_output_battery_energy_accumulator"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SOLARINVERTER": {
  "name": "SOLARINVERTER",
  "type": "abstract",
  "description": "Solar Inverter",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [],
  "applies": [
   "SOLARTOTAL",
   "INPUTLINE",
   "EXTERNALSOURCE"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "INPUTDCVCMONITORING": {
  "name": "INPUTDCVCMONITORING",
  "type": "abstract",
  "description": "DC Input Voltage/Current",
  "multi": true,
  "uses": [
   "input_voltage_sensor",
   "input_current_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SOLARTOTAL": {
  "name": "SOLARTOTAL",
  "type": "abstract",
  "description": "Total Solar Energy",
  "multi": false,
  "uses": [
   "total_solar_energy_accumulator"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "networkingDevice": {
  "name": "networkingDevice",
  "type": "canonical",
  "description": "Networking Device",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "EQUIPMENT"
  ],
  "applies": [
   "DEVTEMPM",
   "STATS",
   "CPRUTIL",
   "ALARMS"
  ],
  "validators": [],
  "input": [
   {
    "key": "isFedBy",
    "multi": true,
    "forEntities": [
     "networkingDevice",
     "computerDevice"
    ]
   },
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "networkingDevice"
    ]
   }
  ],
  "output": [
   {
    "key": "feeds",
    "multi": true,
    "forEntities": [
     "networkingDevice"
    ]
   },
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "networkingDevice"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isMeasuredBy",
    "forCanonicals": [
     {
      "name": "electricMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "networkingDevice",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "feeds",
    "forCanonicals": [
     {
      "name": "computerDevice",
      "multi": true
     }
    ]
   },
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "networkingDevice",
      "multi": false
     }
    ]
   }
  ]
 },
 "computerDevice": {
  "name": "computerDevice",
  "type": "canonical",
  "description": "Computer Device",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "EQUIPMENT"
  ],
  "applies": [
   "DEVTEMPM",
   "STATS",
   "CPRDRVSTS",
   "CPRUTIL",
   "ALARMS"
  ],
  "validators": [],
  "input": [
   {
    "key": "isFedBy",
    "multi": true,
    "forEntities": [
     "networkingDevice"
    ]
   },
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "computerDevice"
    ]
   }
  ],
  "output": [
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "computerDevice"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isMeasuredBy",
    "forCanonicals": [
     {
      "name": "electricMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isFedBy",
    "forCanonicals": [
     {
      "name": "networkingDevice",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "computerDevice",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "computerDevice",
      "multi": false
     }
    ]
   }
  ]
 },
 "airCompressor": {
  "name": "airCompressor",
  "type": "canonical",
  "description": "Air Compressor",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "EQUIPMENT"
  ],
  "applies": [
   "DAPSS",
   "ESS",
   "STATS",
   "RM",
   "RC",
   "ALARMS"
  ],
  "validators": [],
  "input": [
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "airCompressor"
    ]
   }
  ],
  "output": [
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "airCompressor"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "airCompressor",
      "multi": false
     }
    ]
   },
   {
    "key": "isMeasuredBy",
    "forCanonicals": [
     {
      "name": "electricMeter",
      "multi": true
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "airCompressor",
      "multi": false
     }
    ]
   }
  ]
 },
 "zone": {
  "name": "zone",
  "type": "canonical",
  "description": "Spatial Monitoring",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "HVAC"
  ],
  "applies": [
   "AVGZTS",
   "ELECFRCST",
   "BLDGSTARTMX"
  ],
  "validators": [
   "IS_AVGZTS"
  ],
  "input": [
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "zone"
    ]
   }
  ],
  "output": [
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "zone"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isMeasuredBy",
    "forCanonicals": [
     {
      "name": "electricMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "zone",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "zone",
      "multi": false
     }
    ]
   }
  ]
 },
 "ELECFRCST": {
  "name": "ELECFRCST",
  "type": "abstract",
  "description": "Forecasted Electric Consumption",
  "multi": false,
  "uses": [
   "forecast_electric_differential_energy_accumulator"
  ],
  "opt_uses": [
   "forecast_tomorrow_electric_differential_energy_accumulator",
   "electrical_forecast_offset_percentage_sensor",
   "forecast_upperband_electric_differential_energy_accumulator"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "AVGZTS": {
  "name": "AVGZTS",
  "type": "abstract",
  "description": "Avg of Zone Temps",
  "multi": false,
  "uses": [
   "average_zone_air_temperature_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "WCLSS": {
  "name": "WCLSS",
  "type": "abstract",
  "description": "Water Chlorine Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "water_chlorine_concentration_sensor",
   "water_chlorine_concentration_setpoint"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "REDOXS": {
  "name": "REDOXS",
  "type": "abstract",
  "description": "RedOx Potential Monitoring",
  "multi": false,
  "uses": [
   "water_redox_voltage_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "PHMONITORING": {
  "name": "PHMONITORING",
  "type": "abstract",
  "description": "pH Level Monitoring",
  "multi": false,
  "uses": [
   "water_pH_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "DCCURRENT": {
  "name": "DCCURRENT",
  "type": "abstract",
  "description": "DC Current Monitoring",
  "multi": false,
  "uses": [
   "current_sensor"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "HWSYSTEM": {
  "name": "HWSYSTEM",
  "type": "abstract",
  "description": "Hot Water System",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [],
  "applies": [
   "HWELTS",
   "HWPRESS",
   "HOTWFSS",
   "HWISOVSS",
   "HWV",
   "HWVFLOATING"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "CHWSYSTEM": {
  "name": "CHWSYSTEM",
  "type": "abstract",
  "description": "Chilled Water System",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [],
  "applies": [
   "CHWELT",
   "CHWPRESS",
   "CHWFSS",
   "CHWISOVSS",
   "CHWV"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "WISOVSS": {
  "name": "WISOVSS",
  "type": "abstract",
  "description": "Water Isolation Valve Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "water_isolation_valve_run_command",
   "water_isolation_valve_run_status"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "WVPRC": {
  "name": "WVPRC",
  "type": "abstract",
  "description": "Water Valve Percentage Control",
  "multi": false,
  "uses": [],
  "opt_uses": [
   "water_valve_percentage_command",
   "water_valve_percentage_sensor"
  ],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "WGENERIC": {
  "name": "WGENERIC",
  "type": "abstract",
  "description": "Non-Specific Water Group",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [],
  "applies": [
   "WLTSS",
   "WLPS",
   "WATERVALVE"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "WATERVALVE": {
  "name": "WATERVALVE",
  "type": "abstract",
  "description": "Non-Specific Water Valve",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [],
  "applies": [
   "WVPRC",
   "WISOVSS"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "radiantDevice": {
  "name": "radiantDevice",
  "type": "canonical",
  "description": "Radiant Devices",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "EQUIPMENT"
  ],
  "applies": [
   "MSLABTC",
   "WGENERIC",
   "ZTSS",
   "DSM",
   "OCCUPANCY",
   "ALARMS"
  ],
  "validators": [],
  "input": [
   {
    "key": "hasInputSubstance",
    "multi": true,
    "forEntities": [
     "radiantDevice"
    ]
   },
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "radiantDevice"
    ]
   }
  ],
  "output": [
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "radiantDevice"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isFedBy",
    "forCanonicals": [
     {
      "name": "waterSystem",
      "multi": true
     },
     {
      "name": "hotWaterSystem",
      "multi": true
     },
     {
      "name": "condenserWaterSystem",
      "multi": true
     },
     {
      "name": "chilledWaterSystem",
      "multi": true
     },
     {
      "name": "secLoopSystem",
      "multi": true
     },
     {
      "name": "loopSystem",
      "multi": true
     },
     {
      "name": "heatExchanger",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "radiantDevice",
      "multi": false
     }
    ]
   },
   {
    "key": "isMeasuredBy",
    "forCanonicals": [
     {
      "name": "energyMeter",
      "multi": true
     },
     {
      "name": "waterMeter",
      "multi": true
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "radiantDevice",
      "multi": false
     }
    ]
   }
  ]
 },
 "BLDGSTARTMX": {
  "name": "BLDGSTARTMX",
  "type": "abstract",
  "description": "Calculated Building Startup Time",
  "multi": false,
  "uses": [
   "calculated_building_startup_timestamp",
   "calculated_building_startup_status"
  ],
  "opt_uses": [],
  "implements": [],
  "applies": [],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "chilledWaterSystem": {
  "name": "chilledWaterSystem",
  "type": "canonical",
  "description": "Chilled Water System",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "EQUIPMENT"
  ],
  "applies": [
   "CHWSYSTEM",
   "PLANT"
  ],
  "validators": [],
  "input": [
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "chilledWaterSystem"
    ]
   }
  ],
  "output": [
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "chilledWaterSystem"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isFedBy",
    "forCanonicals": [
     {
      "name": "condenserWaterSystem",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "chilledWaterSystem",
      "multi": false
     }
    ]
   },
   {
    "key": "isMeasuredBy",
    "forCanonicals": [
     {
      "name": "energyMeter",
      "multi": true
     },
     {
      "name": "waterMeter",
      "multi": true
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "feeds",
    "forCanonicals": [
     {
      "name": "ahu",
      "multi": true
     },
     {
      "name": "fcu",
      "multi": true
     },
     {
      "name": "heatPump",
      "multi": true
     },
     {
      "name": "waterSystem",
      "multi": true
     },
     {
      "name": "radiantDevice",
      "multi": true
     }
    ]
   },
   {
    "key": "hasPart",
    "forCanonicals": [
     {
      "name": "chiller",
      "multi": true
     },
     {
      "name": "primaryPump",
      "multi": true
     },
     {
      "name": "secondaryPump",
      "multi": true
     },
     {
      "name": "pump",
      "multi": true
     },
     {
      "name": "heatExchanger",
      "multi": true
     },
     {
      "name": "waterTank",
      "multi": true
     }
    ]
   },
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "chilledWaterSystem",
      "multi": false
     }
    ]
   }
  ]
 },
 "condenserWaterSystem": {
  "name": "condenserWaterSystem",
  "type": "canonical",
  "description": "Condenser Water System",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "EQUIPMENT"
  ],
  "applies": [
   "CDWSYSTEM",
   "SYSTEM"
  ],
  "validators": [],
  "input": [
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "condenserWaterSystem"
    ]
   }
  ],
  "output": [
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "condenserWaterSystem"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "condenserWaterSystem",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "feeds",
    "forCanonicals": [
     {
      "name": "chilledWaterSystem",
      "multi": true
     },
     {
      "name": "waterSystem",
      "multi": true
     },
     {
      "name": "radiantDevice",
      "multi": true
     },
     {
      "name": "heatPump",
      "multi": true
     },
     {
      "name": "fcu",
      "multi": true
     }
    ]
   },
   {
    "key": "hasPart",
    "forCanonicals": [
     {
      "name": "coolingTower",
      "multi": true
     },
     {
      "name": "pump",
      "multi": true
     },
     {
      "name": "heatExchanger",
      "multi": true
     },
     {
      "name": "waterTank",
      "multi": true
     }
    ]
   },
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "condenserWaterSystem",
      "multi": false
     }
    ]
   }
  ]
 },
 "hotWaterSystem": {
  "name": "hotWaterSystem",
  "type": "canonical",
  "description": "Hot Water System",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "EQUIPMENT"
  ],
  "applies": [
   "HWSYSTEM",
   "PLANT"
  ],
  "validators": [],
  "input": [
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "hotWaterSystem"
    ]
   }
  ],
  "output": [
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "hotWaterSystem"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isFedBy",
    "forCanonicals": [
     {
      "name": "hotWaterSystem",
      "multi": true
     }
    ]
   },
   {
    "key": "isMeasuredBy",
    "forCanonicals": [
     {
      "name": "electricMeter",
      "multi": true
     },
     {
      "name": "energyMeter",
      "multi": true
     },
     {
      "name": "waterMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "hotWaterSystem",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "feeds",
    "forCanonicals": [
     {
      "name": "ahu",
      "multi": true
     },
     {
      "name": "cav",
      "multi": true
     },
     {
      "name": "fcu",
      "multi": true
     },
     {
      "name": "vav",
      "multi": true
     },
     {
      "name": "uh",
      "multi": true
     },
     {
      "name": "heatPump",
      "multi": true
     },
     {
      "name": "snowMelt",
      "multi": true
     },
     {
      "name": "waterSystem",
      "multi": true
     },
     {
      "name": "radiantDevice",
      "multi": true
     },
     {
      "name": "hotWaterSystem",
      "multi": true
     }
    ]
   },
   {
    "key": "hasPart",
    "forCanonicals": [
     {
      "name": "primaryPump",
      "multi": true
     },
     {
      "name": "secondaryPump",
      "multi": true
     },
     {
      "name": "pump",
      "multi": true
     },
     {
      "name": "heatExchanger",
      "multi": true
     },
     {
      "name": "boiler",
      "multi": true
     },
     {
      "name": "waterTank",
      "multi": true
     }
    ]
   },
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "hotWaterSystem",
      "multi": false
     }
    ]
   }
  ]
 },
 "waterSystem": {
  "name": "waterSystem",
  "type": "canonical",
  "description": "Water System",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "EQUIPMENT"
  ],
  "applies": [
   "WATERSYSTEM",
   "SYSTEM"
  ],
  "validators": [],
  "input": [
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "waterSystem"
    ]
   }
  ],
  "output": [
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "waterSystem"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isFedBy",
    "forCanonicals": [
     {
      "name": "chilledWaterSystem",
      "multi": true
     },
     {
      "name": "hotWaterSystem",
      "multi": true
     },
     {
      "name": "waterSystem",
      "multi": true
     },
     {
      "name": "condenserWaterSystem",
      "multi": true
     }
    ]
   },
   {
    "key": "isMeasuredBy",
    "forCanonicals": [
     {
      "name": "electricMeter",
      "multi": true
     },
     {
      "name": "energyMeter",
      "multi": true
     },
     {
      "name": "waterMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "waterSystem",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "feeds",
    "forCanonicals": [
     {
      "name": "ahu",
      "multi": true
     },
     {
      "name": "cav",
      "multi": true
     },
     {
      "name": "fcu",
      "multi": true
     },
     {
      "name": "heatPump",
      "multi": true
     },
     {
      "name": "radiantDevice",
      "multi": true
     },
     {
      "name": "snowMelt",
      "multi": true
     },
     {
      "name": "uh",
      "multi": true
     },
     {
      "name": "vav",
      "multi": true
     },
     {
      "name": "waterSystem",
      "multi": true
     }
    ]
   },
   {
    "key": "hasPart",
    "forCanonicals": [
     {
      "name": "primaryPump",
      "multi": true
     },
     {
      "name": "secondaryPump",
      "multi": true
     },
     {
      "name": "pump",
      "multi": true
     },
     {
      "name": "heatExchanger",
      "multi": true
     },
     {
      "name": "boiler",
      "multi": true
     },
     {
      "name": "waterTank",
      "multi": true
     },
     {
      "name": "chiller",
      "multi": true
     },
     {
      "name": "boosterPump",
      "multi": true
     }
    ]
   },
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "waterSystem",
      "multi": false
     }
    ]
   }
  ]
 },
 "primaryPump": {
  "name": "primaryPump",
  "type": "canonical",
  "description": "Primary Pump",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "EQUIPMENT"
  ],
  "applies": [
   "SS",
   "PRC",
   "FRQ",
   "ANGVEL",
   "ESS",
   "WLPS",
   "OCCUPANCY",
   "VFDBYPASS",
   "STATS",
   "ALARMS",
   "PLPC"
  ],
  "validators": [],
  "input": [
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "primaryPump"
    ]
   }
  ],
  "output": [
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "primaryPump"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isPartOf",
    "forCanonicals": [
     {
      "name": "chilledWaterSystem",
      "multi": true
     },
     {
      "name": "hotWaterSystem",
      "multi": true
     },
     {
      "name": "waterSystem",
      "multi": true
     }
    ]
   },
   {
    "key": "isMeasuredBy",
    "forCanonicals": [
     {
      "name": "electricMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "primaryPump",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "primaryPump",
      "multi": false
     }
    ]
   }
  ]
 },
 "secondaryPump": {
  "name": "secondaryPump",
  "type": "canonical",
  "description": "Secondary Pump",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [
   "EQUIPMENT"
  ],
  "applies": [
   "SS",
   "PRC",
   "FRQ",
   "ANGVEL",
   "ESS",
   "WLPS",
   "OCCUPANCY",
   "VFDBYPASS",
   "SLPC",
   "STATS",
   "ALARMS"
  ],
  "validators": [],
  "input": [
   {
    "key": "isMirrorOf",
    "multi": false,
    "forEntities": [
     "secondaryPump"
    ]
   }
  ],
  "output": [
   {
    "key": "mirrors",
    "multi": false,
    "forEntities": [
     "secondaryPump"
    ]
   }
  ],
  "canonicalInputs": [
   {
    "key": "isPartOf",
    "forCanonicals": [
     {
      "name": "chilledWaterSystem",
      "multi": true
     },
     {
      "name": "hotWaterSystem",
      "multi": true
     },
     {
      "name": "waterSystem",
      "multi": true
     }
    ]
   },
   {
    "key": "isMeasuredBy",
    "forCanonicals": [
     {
      "name": "electricMeter",
      "multi": true
     }
    ]
   },
   {
    "key": "isMirrorOf",
    "forCanonicals": [
     {
      "name": "secondaryPump",
      "multi": false
     }
    ]
   }
  ],
  "canonicalOutputs": [
   {
    "key": "mirrors",
    "forCanonicals": [
     {
      "name": "secondaryPump",
      "multi": false
     }
    ]
   }
  ]
 },
 "CDWSYSTEM": {
  "name": "CDWSYSTEM",
  "type": "abstract",
  "description": "Condenser Water System",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [],
  "applies": [
   "CDWELT",
   "CDWPRESS",
   "CDWFSS",
   "CDWISOVSS",
   "CDWV"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "SYSTEM": {
  "name": "SYSTEM",
  "type": "abstract",
  "description": "System",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [],
  "applies": [
   "ALARMS",
   "ESS"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "PLANT": {
  "name": "PLANT",
  "type": "abstract",
  "description": "Plant",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [],
  "applies": [
   "PLPRESS",
   "SLPRESS",
   "SYSTEM"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "WATERSYSTEM": {
  "name": "WATERSYSTEM",
  "type": "abstract",
  "description": "Water System",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [],
  "applies": [
   "WLTSS",
   "WLPS",
   "CHWSYSTEM",
   "HWSYSTEM",
   "CDWSYSTEM",
   "WATERQUALITY",
   "WFM"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 },
 "WATERQUALITY": {
  "name": "WATERQUALITY",
  "type": "abstract",
  "description": "Water Quality",
  "multi": false,
  "uses": [],
  "opt_uses": [],
  "implements": [],
  "applies": [
   "WCLSS",
   "REDOXS",
   "PHMONITORING"
  ],
  "validators": [],
  "input": [],
  "output": [],
  "canonicalInputs": [],
  "canonicalOutputs": []
 }
}