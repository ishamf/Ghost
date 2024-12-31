git diff `git describe --abbrev=0`...HEAD -- ':!generate_patch.sh' | sed -e 's/ghost\/core/current/g'
