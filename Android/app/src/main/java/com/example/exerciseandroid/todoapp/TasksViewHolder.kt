package com.example.exerciseandroid.todoapp

import android.content.res.ColorStateList
import android.graphics.Paint
import android.view.View
import android.widget.CheckBox
import android.widget.TextView
import androidx.core.content.ContextCompat
import androidx.recyclerview.widget.RecyclerView
import com.example.exerciseandroid.R
import com.example.exerciseandroid.todoapp.TaskCategory.*

class TasksViewHolder(view: View) : RecyclerView.ViewHolder(view) {

    private val cbTask: CheckBox = view.findViewById(R.id.cbTask)
    private val tvTask: TextView = view.findViewById(R.id.tvTask)

    fun render(task: Task) {

        if (task.isSelected) {
            tvTask.paintFlags = tvTask.paintFlags or Paint.STRIKE_THRU_TEXT_FLAG
        } else {
            tvTask.paintFlags = tvTask.paintFlags and Paint.STRIKE_THRU_TEXT_FLAG.inv()
        }

        cbTask.isChecked = task.isSelected
        tvTask.text = task.name

        val color = when (task.category) {
            Business -> R.color.business_category
            Personal -> R.color.personal_category
            Other -> R.color.other_category
        }

        cbTask.buttonTintList = ColorStateList.valueOf(
            ContextCompat.getColor(cbTask.context, color)
        )
    }
}