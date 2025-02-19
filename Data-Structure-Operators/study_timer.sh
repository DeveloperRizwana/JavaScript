#!/bin/bash

# Define log file
LOG_FILE="$HOME/study_log.txt"

# Ask user for study duration in minutes
read -p "Enter study time (in minutes): " minutes
seconds=$((minutes * 60))

# Log the start time
start_time=$(date "+%Y-%m-%d %H:%M:%S")
echo "Study session started at: $start_time" | tee -a "$LOG_FILE"

# Start the timer
sleep $seconds

# Log the end time
end_time=$(date "+%Y-%m-%d %H:%M:%S")
echo "Study se

